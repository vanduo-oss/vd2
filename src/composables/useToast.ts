import { ref } from 'vue';
import { defineStore } from 'pinia';

export interface ToastEntry {
  id: string;
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  duration: number;
}

let counter = 0;
const nextId = (): string => {
  counter += 1;
  return `toast-${Date.now().toString(36)}-${counter}`;
};

export const useToastStore = defineStore('toast', () => {
  const queue = ref<ToastEntry[]>([]);

  const show = (message: string, opts: Partial<Omit<ToastEntry, 'id' | 'message'>> = {}): string => {
    const id = nextId();
    const entry: ToastEntry = {
      id,
      message,
      variant: opts.variant ?? 'info',
      duration: opts.duration ?? 4000,
    };
    queue.value.push(entry);
    if (entry.duration > 0 && typeof window !== 'undefined') {
      window.setTimeout(() => dismiss(id), entry.duration);
    }
    return id;
  };

  const dismiss = (id: string): void => {
    queue.value = queue.value.filter((t) => t.id !== id);
  };

  return { queue, show, dismiss };
});

export const useToast = () => {
  const store = useToastStore();
  return {
    show: store.show,
    dismiss: store.dismiss,
    queue: store.queue,
  };
};