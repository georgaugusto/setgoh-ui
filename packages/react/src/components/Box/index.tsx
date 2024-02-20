import { ComponentProps, ElementType, FC, ReactNode } from 'react'

import { boxContainerStyle, BoxContainerVariants } from './styles.css'

export type BoxProps = ComponentProps<'div'> &
  BoxContainerVariants & {
    children?: ReactNode
    as?: ElementType
  }

export const Box: FC<BoxProps> = ({
  children,
  padding,
  as: Component = 'div',
  ...props
}) => {
  const variantBoxContainer = boxContainerStyle({
    padding,
  })

  return (
    <Component className={variantBoxContainer} {...props}>
      {children}
    </Component>
  )
}

Box.displayName = 'Box'
