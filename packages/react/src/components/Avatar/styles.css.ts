import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { sprinkles } from '../../styles/sprinkles.css'

export const avatarContainer = recipe({
  base: style([
    sprinkles({
      borderRadius: 'full',
    }),
    {
      display: 'inline-block',
      overflow: 'hidden',
    },
  ]),

  variants: {
    size: {
      xxs: sprinkles({ width: 7, height: 7 }),
      xs: sprinkles({ width: 10, height: 10 }),
      sm: sprinkles({ width: 12, height: 12 }),
      md: sprinkles({ width: 16, height: 16 }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const avatarImage = style([
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
])

export const avatarFallback = recipe({
  base: style([
    sprinkles({
      background: 'backgroundAccent',
      color: 'contentOnColor',
      fontWeight: 'bold',
    }),
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  ]),
  variants: {
    size: {
      xxs: sprinkles({ fontSize: 'xs', lineHeight: 'short' }),

      xs: sprinkles({ fontSize: 'md', lineHeight: 'short' }),

      sm: sprinkles({ fontSize: 'xl', lineHeight: 'short' }),

      md: sprinkles({ fontSize: '2xl', lineHeight: 'short' }),
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type AvatarVariants = RecipeVariants<typeof avatarContainer> &
  RecipeVariants<typeof avatarFallback>
