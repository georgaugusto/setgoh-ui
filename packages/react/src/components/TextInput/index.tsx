import { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  TextInputVariants,
  inputStyle,
  prefixStyle,
  textInputContainerStyle,
} from './styles.css'

export type TextInputProps = ComponentProps<'input'> &
  TextInputVariants & {
    prefix?: string
  }

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, isErrored, sizes, ...props }: TextInputProps, ref) => {
    const variantTextInputContainer = textInputContainerStyle({
      sizes,
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
