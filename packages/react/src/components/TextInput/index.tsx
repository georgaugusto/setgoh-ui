import { HTMLAttributes, forwardRef } from 'react'
import { inputStyle, prefixStyle, textInputContainerStyle } from './styles.css'

type TextInputVariants = {
  size?: 'sm' | 'md' | 'lg'
  isErrored?: boolean
}

export interface TextInputProps
  extends HTMLAttributes<HTMLInputElement>,
    TextInputVariants {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, isErrored, size, ...props }, ref) => {
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
