import { ComponentProps, ElementType, FC, ReactNode } from 'react'

import { boxContainer } from './styles.css'

export interface BoxProps extends ComponentProps<'div'> {
  children?: ReactNode
  as?: ElementType
  padding: 'sm' | 'md' | 'lg'
}

export const Box: FC<BoxProps> = ({
  children,
  padding,
  as: Component = 'div',
  ...props
}) => {
  const variantBoxContainer = boxContainer({
    padding,
  })

  return (
    <Component className={variantBoxContainer} {...props}>
      {children}
    </Component>
  )
}

Box.displayName = 'Box'
