import { ComponentProps, ElementType, FC, ReactNode } from 'react'

import { boxContainer } from './styles.css'

export interface BoxProps extends ComponentProps<'div'> {
  children?: ReactNode
  as?: ElementType
}

export const Box: FC<BoxProps> = ({
  children,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component className={boxContainer} {...props}>
      {children}
    </Component>
  )
}

Box.displayName = 'Box'
