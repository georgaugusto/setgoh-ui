import * as PrimitiveToast from '@radix-ui/react-toast'
import { CheckCircle, Info, Warning, X, XCircle } from 'phosphor-react'
import * as styles from './styles.css'

export const RadixToastProvider = PrimitiveToast.Provider
export const RadixToastViewport = PrimitiveToast.Viewport

export type ToastProps = PrimitiveToast.ToastProps &
  styles.ToastVariants & {
    icon?: boolean
    description?: string
  }

type IconsEnum = 'accent' | 'positive' | 'warning' | 'negative' | 'snackbars'

function Icons(variant: IconsEnum) {
  switch (variant) {
    case 'accent':
      return <Info size={24} />
    case 'positive':
      return <CheckCircle size={24} />
    case 'warning':
      return <Warning size={24} />
    case 'negative':
      return <XCircle size={24} />
    case 'snackbars':
      return <CheckCircle size={24} />
    default:
      return undefined
  }
}

export function Toast({
  description,
  title,
  icon,
  duration = 3000,
  variant = 'accent',
  ...props
}: ToastProps) {
  const toastContainerCss = styles.toastContainer({ variant })

  return (
    <PrimitiveToast.Root
      duration={duration}
      className={toastContainerCss}
      {...props}
    >
      {icon && <div className={styles.toastIcon}>{Icons(variant)}</div>}

      <div>
        <PrimitiveToast.Title className={styles.toastTitle}>
          {title}
        </PrimitiveToast.Title>
        <PrimitiveToast.Description className={styles.toastDescription}>
          {description}
        </PrimitiveToast.Description>
      </div>
      <PrimitiveToast.Close asChild className={styles.ToastButtonClose}>
        <X weight="fill" />
      </PrimitiveToast.Close>
    </PrimitiveToast.Root>
  )
}
