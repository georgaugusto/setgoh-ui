import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

import { sprinkles } from '../../styles/sprinkles.css'

export const textStyles = recipe({
  base: style([
    {
      margin: 0,
    },
    sprinkles({
      fontFamily: 'default',
      lineHeight: 'base',
      color: 'contentPrimary',
    }),
  ]),

  variants: {
    size: {
      xxs: sprinkles({ fontSize: 'xxs' }),
      xs: sprinkles({ fontSize: 'xs' }),
      sm: sprinkles({ fontSize: 'sm' }),
      md: sprinkles({ fontSize: 'md' }),
      lg: sprinkles({ fontSize: 'lg' }),
      xl: sprinkles({ fontSize: 'xl' }),
      '2xl': sprinkles({ fontSize: '2xl' }),
      '4xl': sprinkles({ fontSize: '4xl' }),
      '5xl': sprinkles({ fontSize: '5xl' }),
      '6xl': sprinkles({ fontSize: '6xl' }),
      '7xl': sprinkles({ fontSize: '7xl' }),
      '8xl': sprinkles({ fontSize: '8xl' }),
      '9xl': sprinkles({ fontSize: '9xl' }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextVariantSize = RecipeVariants<typeof textStyles>
