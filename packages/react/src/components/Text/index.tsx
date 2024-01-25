import { ElementRef, HTMLAttributes, forwardRef, ElementType } from 'react'

import { TextVariantSize, textStyles } from './styles.css'

// const allowedHtmlTags = ['p', 'span', 'strong', 'label'] as const
// type AllowedHtmlTags = (typeof allowedHtmlTags)[number]

export type TextProps = HTMLAttributes<HTMLElement> &
  TextVariantSize & {
    as?: ElementType
  }

export const Text = forwardRef<ElementRef<'p'>, TextProps>(
  ({ children, size, as: Component = 'p', ...props }: TextProps, ref) => {
    const variantClass = textStyles({ size })

    return (
      <Component className={variantClass} {...props} ref={ref}>
        {children}
      </Component>
    )
  },
)

Text.displayName = 'Text'
