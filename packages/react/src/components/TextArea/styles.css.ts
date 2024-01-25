import { sprinkles } from '../../styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/index.css'
import { recipe } from '@vanilla-extract/recipes'

export const textAreaStyles = recipe({
  base: style([
    sprinkles({
      background: 'backgroundTertiary',
      color: 'contentTertiary',

      paddingBottom: 3,
      paddingTop: 3,
      paddingLeft: 4,
      paddingRight: 4,
      borderRadius: 'sm',

      fontFamily: 'default',
      fontSize: 'sm',
      fontWeight: 'regular',
    }),
    {
      width: '100%',
      minHeight: 80,

      resize: 'vertical',
      boxSizing: 'border-box',

      border: `2px solid ${vars.colors.backgroundTertiary}`,

      selectors: {
        '&:focus': {
          borderColor: vars.colors.borderSelected,
          outline: 0,
        },
        '&:disabled': {
          backgroundColor: vars.colors.backgroundStateDisabled,
          color: vars.colors.contentStateDisabled,
          border: `2px solid ${vars.colors.backgroundStateDisabled}`,

          cursor: 'not-allowed',
        },
        '&:placeholder': {
          color: vars.colors.contentTertiary,
        },
      },
    },
  ]),

  variants: {
    isErrored: {
      true: style([
        sprinkles({
          background: 'backgroundLightNegative',
        }),
        {
          border: `2px solid ${vars.colors.borderNegative}`,

          transition:
            'background-color, border 0.3s cubic-bezier(0.4, 0, 1, 1)',
        },
      ]),
    },
  },

  defaultVariants: {
    isErrored: false,
  },
})
