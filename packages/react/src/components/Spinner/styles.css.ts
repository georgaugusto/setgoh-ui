import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { keyframes, style } from '@vanilla-extract/css'

import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const spinnerStyle = recipe({
  base: style([
    {
      border: `2px solid ${vars.colors.backgroundTertiary}`,
      borderTop: `2px solid ${vars.colors.backgroundInverseSecondary}`,
      borderRadius: '50%',
      animation: `${spin} 1s linear infinite`,
    },
    {},
  ]),

  variants: {
    size: {
      sm: sprinkles({ width: 4, height: 4 }),

      md: sprinkles({ width: 6, height: 6 }),

      lg: sprinkles({ width: 8, height: 8 }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariantSize = RecipeVariants<typeof spinnerStyle>
