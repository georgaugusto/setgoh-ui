import { ComponentProps, ElementRef, forwardRef } from 'react'
import { textAreaStyles } from './styles.css'

export type TextAreaProps = ComponentProps<'textarea'> & {
  isErrored: boolean
}

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>(
  ({ isErrored, ...props }: TextAreaProps, ref) => {
    const variantTextAreaStyles = textAreaStyles({ isErrored })

    return <textarea className={variantTextAreaStyles} {...props} ref={ref} />
  },
)

TextArea.displayName = 'TextArea'
