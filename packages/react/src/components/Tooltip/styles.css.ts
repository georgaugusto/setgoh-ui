import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'

export const tooltipContentStyle = recipe({
  base: style([
    sprinkles({
      borderRadius: 'md',
      padding: 4,

      fontFamily: 'default',
      fontSize: 'sm',
      lineHeight: 'short',
    }),
    {},
  ]),

  variants: {
    variant: {
      primary: sprinkles({
        color: 'contentInversePrimary',
        background: 'backgroundInverseSecondary',
      }),
      secondary: sprinkles({
        color: 'contentPrimary',
        background: 'backgroundSecondary',
      }),
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export const tooltipArrowStyle = recipe({
  variants: {
    variant: {
      primary: style([
        {
          fill: vars.colors.backgroundInverseSecondary,
        },
      ]),
      secondary: style([
        {
          fill: vars.colors.backgroundSecondary,
        },
      ]),
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type TooltipArrowVariantSize = RecipeVariants<typeof tooltipArrowStyle>
export type TooltipContentVariantSize = RecipeVariants<
  typeof tooltipContentStyle
>
