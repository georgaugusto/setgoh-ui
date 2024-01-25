import { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  inputStyle,
  prefixStyle,
  textInputContainerStyle,
  TextInputVariants,
} from './styles.css'

export type TextInputProps = ComponentProps<'input'> &
  TextInputVariants & {
    prefix?: string
    isErrored?: boolean
  }

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, isErrored, size, ...props }: TextInputProps, ref) => {
    const variantTextInputContainer = textInputContainerStyle({
      size,
      isErrored,
    })

    return (
      <div className={variantTextInputContainer}>
        {!!prefix && <span className={prefixStyle}>{prefix}</span>}
        <input ref={ref} className={inputStyle} {...props} />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
