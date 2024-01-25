import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import {
  Toast,
  ToastProps,
  RadixToastProvider,
  RadixToastViewport,
} from './index'
import * as styles from './styles.css'

type ToastContextProps = (toast: ToastProps) => void

export const ToastContext = createContext({} as ToastContextProps)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = useCallback(
    ({ title, description, duration, variant }: Omit<ToastProps, 'id'>) => {
      const toast = {
        id: Math.random().toString(36).slice(2),
        title,
        description,
        duration,
        variant,
      } as ToastProps
      setToasts((currentToasts) => [...currentToasts, toast])
    },
    [],
  )

  return (
    <ToastContext.Provider value={addToast}>
      <RadixToastProvider>
        <RadixToastViewport className={styles.toastViewport} />
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              onOpenChange={(open) => {
                if (!open) {
                  setToasts((currentToasts) =>
                    currentToasts.filter((t) => t.id !== toast.id),
                  )
                }
              }}
              onSwipeEnd={() => {
                setToasts((currentToasts) =>
                  currentToasts.filter((t) => t.id !== toast.id),
                )
              }}
              {...toast}
            />
          )
        })}
        {children}
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextProps {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider')
  }

  return context
}
