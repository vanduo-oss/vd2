import { onMounted, onUnmounted, type Ref } from "vue";

/**
 * Reproduces `VanduoFlow.init()` from `framework/js/components/flow.js`:
 * scans `root` for `.vd-flow` / `.vd-carousel` carousels and wires slide
 * transitions (slide + fade), prev/next controls, dot indicators, keyboard
 * arrows, pointer/touch swipe, and autoplay (pause on hover/focus).
 *
 * Indicator bridge: the docs markup places bare `<button>`s inside
 * `.vd-flow-indicators`, but the framework CSS/JS target `.vd-flow-indicator`.
 * We add that class here so indicators render as dots and become interactive —
 * matching the component's clear design intent.
 */
export function useFlow(root: Ref<HTMLElement | null>): void {
  const cleanups: Array<() => void> = [];

  const initInstance = (el: HTMLElement): void => {
    const track = el.querySelector<HTMLElement>(".vd-flow-track");
    if (!track) return;

    const slides = Array.from(track.querySelectorAll<HTMLElement>(".vd-flow-slide"));
    if (slides.length === 0) return;

    const isFade = el.classList.contains("vd-flow-fade");
    const autoplay = el.hasAttribute("data-vd-autoplay");
    const interval = parseInt(el.getAttribute("data-vd-interval") ?? "", 10) || 5000;
    const loop = el.getAttribute("data-vd-loop") !== "false";

    const state = { current: 0, total: slides.length };
    let autoplayTimer: number | null = null;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    const threshold = 50;

    slides.forEach((slide, i) => {
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", `Slide ${i + 1} of ${slides.length}`);
      if (i === 0) slide.classList.add("is-active");
    });

    el.setAttribute("role", "region");
    el.setAttribute("aria-roledescription", "carousel");
    if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", "Carousel");

    const liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only";
    liveRegion.style.cssText =
      "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);";
    el.appendChild(liveRegion);

    // Bridge bare indicator buttons → styled, interactive dots.
    const indicators = Array.from(
      el.querySelectorAll<HTMLElement>(".vd-flow-indicators button, .vd-flow-indicator"),
    );
    indicators.forEach((ind, i) => {
      ind.classList.add("vd-flow-indicator");
      ind.setAttribute("role", "tab");
      ind.setAttribute("aria-selected", i === 0 ? "true" : "false");
      if (!ind.getAttribute("aria-label")) ind.setAttribute("aria-label", `Go to slide ${i + 1}`);
    });

    const goTo = (index: number, announce = true): void => {
      const target = loop
        ? ((index % state.total) + state.total) % state.total
        : Math.max(0, Math.min(index, state.total - 1));

      const prevIndex = state.current;
      state.current = target;

      if (isFade) {
        slides.forEach((s, i) => s.classList.toggle("is-active", i === target));
      } else {
        track.style.transform = `translateX(-${target * 100}%)`;
      }

      indicators.forEach((ind, i) => {
        ind.classList.toggle("is-active", i === target);
        ind.setAttribute("aria-selected", i === target ? "true" : "false");
        ind.setAttribute("aria-current", i === target ? "true" : "false");
      });

      slides.forEach((s, i) => {
        s.setAttribute("aria-hidden", i !== target ? "true" : "false");
      });

      if (announce) liveRegion.textContent = `Slide ${target + 1} of ${state.total}`;

      el.dispatchEvent(
        new CustomEvent("flow:change", {
          detail: { current: target, previous: prevIndex, total: state.total },
        }),
      );
    };

    const next = (): void => goTo(state.current + 1);
    const prev = (): void => goTo(state.current - 1);

    const prevBtn = el.querySelector<HTMLElement>(".vd-flow-prev");
    const nextBtn = el.querySelector<HTMLElement>(".vd-flow-next");
    if (prevBtn) {
      prevBtn.addEventListener("click", prev);
      cleanups.push(() => prevBtn.removeEventListener("click", prev));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", next);
      cleanups.push(() => nextBtn.removeEventListener("click", next));
    }

    indicators.forEach((ind, i) => {
      const h = (): void => goTo(i);
      ind.addEventListener("click", h);
      cleanups.push(() => ind.removeEventListener("click", h));
    });

    const keyHandler = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") {
        prev();
        e.preventDefault();
      }
      if (e.key === "ArrowRight") {
        next();
        e.preventDefault();
      }
    };
    el.setAttribute("tabindex", "0");
    el.addEventListener("keydown", keyHandler);
    cleanups.push(() => el.removeEventListener("keydown", keyHandler));

    const pointerDown = (e: MouseEvent | TouchEvent): void => {
      isDragging = true;
      startX =
        (e as MouseEvent).clientX ||
        ((e as TouchEvent).touches && (e as TouchEvent).touches[0]?.clientX) ||
        0;
      currentX = startX;
      el.classList.add("is-dragging");
    };
    const pointerMove = (e: MouseEvent | TouchEvent): void => {
      if (!isDragging) return;
      currentX =
        (e as MouseEvent).clientX ||
        ((e as TouchEvent).touches && (e as TouchEvent).touches[0]?.clientX) ||
        0;
    };
    const pointerUp = (): void => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("is-dragging");
      const diff = startX - currentX;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) next();
        else prev();
      }
    };

    el.addEventListener("mousedown", pointerDown);
    el.addEventListener("mousemove", pointerMove);
    el.addEventListener("mouseup", pointerUp);
    el.addEventListener("mouseleave", pointerUp);
    el.addEventListener("touchstart", pointerDown, { passive: true });
    el.addEventListener("touchmove", pointerMove, { passive: true });
    el.addEventListener("touchend", pointerUp);
    cleanups.push(
      () => el.removeEventListener("mousedown", pointerDown),
      () => el.removeEventListener("mousemove", pointerMove),
      () => el.removeEventListener("mouseup", pointerUp),
      () => el.removeEventListener("mouseleave", pointerUp),
      () => el.removeEventListener("touchstart", pointerDown),
      () => el.removeEventListener("touchmove", pointerMove),
      () => el.removeEventListener("touchend", pointerUp),
    );

    const startAutoplay = (): void => {
      stopAutoplay();
      autoplayTimer = window.setInterval(next, interval);
    };
    const stopAutoplay = (): void => {
      if (autoplayTimer != null) {
        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };
    if (autoplay) {
      startAutoplay();
      el.addEventListener("mouseenter", stopAutoplay);
      el.addEventListener("mouseleave", startAutoplay);
      el.addEventListener("focusin", stopAutoplay);
      el.addEventListener("focusout", startAutoplay);
      cleanups.push(
        () => el.removeEventListener("mouseenter", stopAutoplay),
        () => el.removeEventListener("mouseleave", startAutoplay),
        () => el.removeEventListener("focusin", stopAutoplay),
        () => el.removeEventListener("focusout", startAutoplay),
        () => stopAutoplay(),
      );
    }

    goTo(0, false);
  };

  onMounted(() => {
    const el = root.value;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".vd-flow, .vd-carousel").forEach(initInstance);
  });

  onUnmounted(() => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  });
}
