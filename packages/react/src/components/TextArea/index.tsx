import { ComponentProps, ElementRef, forwardRef } from 'react'
import { textAreaStyles } from './styles.css'

export type TextAreaProps = ComponentProps<'textarea'> & {
  isErrored: boolean
}

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>(
  ({ isErrored, className = '', ...props }: TextAreaProps, ref) => {
    const variantTextAreaStyles = textAreaStyles({ isErrored })

    return (
      <textarea
        className={`${variantTextAreaStyles} ${className}`.trim()}
        {...props}
        ref={ref}
      />
    )
  },
)

TextArea.displayName = 'TextArea'
