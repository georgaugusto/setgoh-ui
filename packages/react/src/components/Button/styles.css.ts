import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { globalStyle, style } from '@vanilla-extract/css'
import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'

const { colors, space } = vars

const baseButtonStyle = style([
  sprinkles({
    fontSize: 'sm',
    fontWeight: 'medium',
    fontFamily: 'default',

    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0,
    paddingBottom: 0,

    gap: 2,

    borderRadius: 'sm',
  }),
  {
    textAlign: 'center',
    minWidth: '120px',
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    borderStyle: 'none',

    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
])

export const buttonStyles = recipe({
  base: baseButtonStyle,

  variants: {
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },

    auto: {
      true: style({
        width: '100%',
      }),
    },

    loading: {
      true: style({
        cursor: 'not-allowed',
      }),
    },

    size: {
      sm: style({ height: '36px' }),
      md: style({ height: '48px' }),
      lg: style({ height: '56px' }),
    },

    color: {
      white: {},
      black: {},
      red: {},
      yellow: {},
      green: {},
      blue: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'primary',
        color: 'white',
      },
      style: style([
        sprinkles({
          color: 'contentPrimary',
          background: 'backgroundTertiary',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              background: `${colors.backgroundTertiary}`,

              boxShadow: `inset 999px 999px 0px ${colors.primaryATransparence8}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
              background: `${colors.backgroundStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'primary',
        color: 'black',
      },
      style: style([
        sprinkles({
          color: 'contentInversePrimary',
          background: 'backgroundInversePrimary',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              background: `${colors.backgroundInversePrimary}`,

              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
              background: `${colors.backgroundStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'primary',
        color: 'red',
      },
      style: style([
        sprinkles({
          color: 'contentInversePrimary',
          background: 'backgroundNegative',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
            '&:disabled': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'primary',
        color: 'yellow',
      },
      style: style([
        sprinkles({
          color: 'contentPrimary',
          background: 'backgroundWarning',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
            '&:disabled': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'primary',
        color: 'green',
      },
      style: style([
        sprinkles({
          color: 'contentInversePrimary',
          background: 'backgroundPositive',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
            '&:disabled': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'primary',
        color: 'blue',
      },
      style: style([
        sprinkles({
          color: 'contentInversePrimary',
          background: 'backgroundAccent',
        }),
        {
          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
            '&:disabled': {
              boxShadow: `inset 999px 999px 0px ${colors.primaryBTransparence20}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'white',
      },
      style: style([
        sprinkles({
          color: 'contentTertiary',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.borderOpaque}`,

          selectors: {
            '&:not(:disabled):hover': {
              background: `${colors.backgroundTertiary}`,

              boxShadow: `inset 999px 999px 0px ${colors.primaryATransparence8}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
              background: `${colors.backgroundStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'black',
      },
      style: style([
        sprinkles({
          color: 'primaryA',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.primaryA}`,

          selectors: {
            '&:not(:disabled):hover': {
              color: `${colors.primaryA}`,
              background: `${colors.backgroundStateDisabled}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
              background: `${colors.backgroundStateDisabled}`,

              border: `2px solid ${colors.borderOpaque}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'red',
      },
      style: style([
        sprinkles({
          color: 'contentNegative',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.contentNegative}`,

          selectors: {
            '&:not(:disabled):hover': {
              color: `${colors.contentInversePrimary}`,
              background: `${colors.backgroundNegative}`,

              border: `2px solid ${colors.borderNegative}`,
            },
            '&:disabled': {
              color: `${colors.borderNegative}`,
              borderColor: `${colors.borderNegative}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'yellow',
      },
      style: style([
        sprinkles({
          color: 'contentWarning',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.contentWarning}`,

          selectors: {
            '&:not(:disabled):hover': {
              color: `${colors.contentInversePrimary}`,
              background: `${colors.backgroundWarning}`,

              border: `2px solid ${colors.borderWarning}`,
            },
            '&:disabled': {
              color: `${colors.borderWarning}`,
              borderColor: `${colors.borderWarning}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'green',
      },
      style: style([
        sprinkles({
          color: 'contentPositive',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.contentPositive}`,

          selectors: {
            '&:not(:disabled):hover': {
              color: `${colors.contentInversePrimary}`,
              background: `${colors.backgroundPositive}`,

              border: `2px solid ${colors.borderPositive}`,
            },
            '&:disabled': {
              color: `${colors.borderPositive}`,
              borderColor: `${colors.borderPositive}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'secondary',
        color: 'blue',
      },
      style: style([
        sprinkles({
          color: 'contentAccent',
        }),
        {
          background: 'transparent',
          border: `2px solid ${colors.contentAccent}`,

          selectors: {
            '&:not(:disabled):hover': {
              color: `${colors.contentInversePrimary}`,
              background: `${colors.backgroundAccent}`,

              border: `2px solid ${colors.borderAccentLight}`,
            },
            '&:disabled': {
              color: `${colors.borderAccentLight}`,
              borderColor: `${colors.borderAccentLight}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'white',
      },
      style: style([
        sprinkles({
          color: 'backgroundTertiary',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'black',
      },
      style: style([
        sprinkles({
          color: 'backgroundInversePrimary',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'red',
      },
      style: style([
        sprinkles({
          color: 'backgroundNegative',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'yellow',
      },
      style: style([
        sprinkles({
          color: 'backgroundWarning',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'green',
      },
      style: style([
        sprinkles({
          color: 'backgroundPositive',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
    {
      variants: {
        variant: 'tertiary',
        color: 'blue',
      },
      style: style([
        sprinkles({
          color: 'backgroundAccent',
        }),
        {
          background: 'transparent',

          selectors: {
            '&:not(:disabled):hover': {
              boxShadow: `inset 999px 999px 0px ${colors.backgroundOverlayLight}`,
            },
            '&:disabled': {
              color: `${colors.contentStateDisabled}`,
            },
          },
        },
      ]),
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    color: 'white',
  },
})

globalStyle(`${baseButtonStyle} svg`, {
  width: space[4],
  height: space[4],
})

export type ButtonVariants = RecipeVariants<typeof buttonStyles>
