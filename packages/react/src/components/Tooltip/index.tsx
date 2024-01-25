import { ElementRef, ReactNode, forwardRef } from 'react'
import * as RadixToolTip from '@radix-ui/react-tooltip'
import {
  tooltipContentStyle,
  tooltipArrowStyle,
  TooltipContentVariantSize,
  TooltipArrowVariantSize,
} from './styles.css'

export type TooltipProps = {
  children?: ReactNode
  content: string
  delayDuration?: number
} & TooltipContentVariantSize &
  TooltipArrowVariantSize

export const Tooltip = forwardRef<ElementRef<'div'>, TooltipProps>(
  (
    { content, variant, children, delayDuration, ...props }: TooltipProps,
    ref,
  ) => {
    const tooltipContentClass = tooltipContentStyle({ variant })
    const tooltipArrowClass = tooltipArrowStyle({ variant })

    return (
      <RadixToolTip.Root delayDuration={delayDuration}>
        <RadixToolTip.Trigger asChild>{children}</RadixToolTip.Trigger>
        <RadixToolTip.Content
          sideOffset={5}
          className={tooltipContentClass}
          ref={ref}
          {...props}
        >
          {content}
          <RadixToolTip.Arrow className={tooltipArrowClass} />
        </RadixToolTip.Content>
      </RadixToolTip.Root>
    )
  },
)

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <RadixToolTip.Provider>{children}</RadixToolTip.Provider>
}

Tooltip.displayName = 'Tooltip'
