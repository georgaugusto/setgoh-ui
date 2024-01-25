import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

import { sprinkles } from '../../styles/sprinkles.css'

export const headingStyles = recipe({
  base: style([
    {
      margin: 0,
    },
    sprinkles({
      fontFamily: 'default',
      lineHeight: 'shorter',
      color: 'contentPrimary',
    }),
  ]),

  variants: {
    size: {
      sm: sprinkles({ fontSize: 'xl' }),
      md: sprinkles({ fontSize: '2xl' }),
      lg: sprinkles({ fontSize: '4xl' }),
      '2xl': sprinkles({ fontSize: '5xl' }),
      '3xl': sprinkles({ fontSize: '6xl' }),
      '4xl': sprinkles({ fontSize: '7xl' }),
      '5xl': sprinkles({ fontSize: '8xl' }),
      '6xl': sprinkles({ fontSize: '9xl' }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type HeadingVariantSize = RecipeVariants<typeof headingStyles>
