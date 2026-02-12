import { ref, readonly, type Ref } from 'vue'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

export interface ToastOptions {
  title: string
  message?: string
  duration?: number
  type?: ToastType
}

// Global toast state
const toasts: Ref<Toast[]> = ref([])
let toastCounter = 0

function generateId(): string {
  return `toast-${++toastCounter}-${Date.now()}`
}

function addToast(options: ToastOptions & { type: ToastType }): string {
  const id = generateId()
  const duration = options.duration ?? 5000

  const toast: Toast = {
    id,
    type: options.type,
    title: options.title,
    message: options.message,
    duration,
  }

  toasts.value.push(toast)

  // Auto-remove after duration (if not 0)
  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  return id
}

function removeToast(id: string): void {
  const index = toasts.value.findIndex((t) => t.id === id)
  if (index !== -1) {
    toasts.value.splice(index, 1)
  }
}

function clearAllToasts(): void {
  toasts.value = []
}

/**
 * Toast notification composable
 *
 * @example
 * ```ts
 * const { success, error, warning, info } = useToast()
 *
 * success({ title: 'Saved!', message: 'Your changes have been saved.' })
 * error({ title: 'Error', message: 'Something went wrong.' })
 * ```
 */
export function useToast() {
  const success = (options: ToastOptions): string => {
    return addToast({ ...options, type: 'success' })
  }

  const error = (options: ToastOptions): string => {
    return addToast({ ...options, type: 'error' })
  }

  const warning = (options: ToastOptions): string => {
    return addToast({ ...options, type: 'warning' })
  }

  const info = (options: ToastOptions): string => {
    return addToast({ ...options, type: 'info' })
  }

  return {
    toasts: readonly(toasts),
    success,
    error,
    warning,
    info,
    remove: removeToast,
    clear: clearAllToasts,
  }
}
