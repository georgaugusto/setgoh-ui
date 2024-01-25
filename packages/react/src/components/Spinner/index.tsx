import { FC, HTMLAttributes } from 'react'

import { SpinnerVariantSize, spinnerStyle } from './styles.css'

export type SpinnerProps = HTMLAttributes<HTMLElement> & SpinnerVariantSize

export const Spinner: FC<SpinnerProps> = ({ size, ...props }) => {
  const variantClass = spinnerStyle({ size })

  return <div className={variantClass} {...props} />
}

Spinner.displayName = 'Spinner'
