import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../styles/sprinkles.css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/index.css'

export const textInputContainerStyle = recipe({
  base: style([
    sprinkles({
      background: 'backgroundTertiary',
      borderRadius: 'sm',
    }),
    {
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'center',

      border: `2px solid ${vars.colors.backgroundTertiary}`,

      selectors: {
        '&:has(input:focus)': {
          borderColor: vars.colors.borderSelected,
        },
        '&:has(input:disabled)': {
          backgroundColor: vars.colors.backgroundStateDisabled,
          border: `2px solid ${vars.colors.backgroundStateDisabled}`,

          cursor: 'not-allowed',
        },
      },
    },
  ]),

  variants: {
    size: {
      sm: sprinkles({
        paddingBottom: 2,
        paddingTop: 2,
        paddingLeft: 3,
        paddingRight: 3,
      }),
      md: sprinkles({
        paddingBottom: 3,
        paddingTop: 3,
        paddingLeft: 4,
        paddingRight: 4,
      }),
      lg: sprinkles({
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 5,
        paddingRight: 5,
      }),
    },

    isErrored: {
      true: style([
        sprinkles({
          background: 'backgroundLightNegative',
          borderRadius: 'sm',
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
    size: 'md',
    isErrored: false,
  },
})

export const prefixStyle = sprinkles({
  fontFamily: 'default',
  fontSize: 'sm',
  color: 'contentTertiary',
  fontWeight: 'regular',
})

export const inputStyle = style([
  sprinkles({
    fontFamily: 'default',
    fontWeight: 'regular',

    color: 'contentPrimary',
  }),
  {
    width: '100%',

    background: 'transparent',

    border: 0,

    ':focus': {
      outline: 0,
    },

    ':disabled': {
      color: vars.colors.contentStateDisabled,

      cursor: 'not-allowed',
    },

    '::placeholder': {
      color: sprinkles({ color: 'contentTertiary' }),
    },
  },
])

export type TextInputVariants = RecipeVariants<typeof textInputContainerStyle>
