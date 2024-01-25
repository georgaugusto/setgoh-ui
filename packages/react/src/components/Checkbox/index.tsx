import { Check } from 'phosphor-react'
import { checkboxIndicatorStyles, checkboxRootStyles } from './styles.css'
import * as CheckboxUI from '@radix-ui/react-checkbox'
import { ComponentProps, ElementRef, forwardRef } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxUI.Root> & {
  variant: 'default' | 'positive'
}

export const Checkbox = forwardRef<ElementRef<'button'>, CheckboxProps>(
  ({ variant, disabled, ...props }: CheckboxProps, ref) => {
    const variantCheckboxRootStyles = checkboxRootStyles({
      variant,
    })

    return (
      <CheckboxUI.Root
        className={variantCheckboxRootStyles}
        disabled={disabled}
        {...props}
        ref={ref}
      >
        <CheckboxUI.Indicator asChild className={checkboxIndicatorStyles}>
          <Check weight="bold" />
        </CheckboxUI.Indicator>
      </CheckboxUI.Root>
    )
  },
)

Checkbox.displayName = 'Checkbox'
