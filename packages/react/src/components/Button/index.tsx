import { ComponentProps, ElementRef, ElementType, forwardRef } from 'react'

import { buttonStyles, ButtonVariants } from './styles.css'
import { Spinner } from '../Spinner'

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    as?: ElementType
  }

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      color,
      auto,
      loading,
      as: Component = 'button',
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const variantButton = buttonStyles({ variant, size, color, auto, loading })

    return (
      <Component
        className={variantButton}
        isDisabled={true}
        {...props}
        ref={ref}
      >
        {loading ? <Spinner size={size} /> : children}
      </Component>
    )
  },
)

Button.displayName = 'Button'
