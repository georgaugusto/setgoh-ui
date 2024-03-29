import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'

export const baseBoxContainer = style([
  sprinkles({
    borderRadius: 'md',
    background: 'backgroundPrimary',
  }),
  {
    border: `2px solid ${vars.colors.borderOpaque}`,
  },
])

export const boxContainerStyle = recipe({
  base: baseBoxContainer,

  variants: {
    padding: {
      sm: sprinkles({ padding: 2 }),
      md: sprinkles({ padding: 4 }),
      lg: sprinkles({ padding: 6 }),
    },
  },

  defaultVariants: {
    padding: 'md',
  },
})

export type BoxContainerVariants = RecipeVariants<typeof boxContainerStyle>
