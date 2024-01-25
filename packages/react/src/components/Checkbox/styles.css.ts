import { style, keyframes } from '@vanilla-extract/css'
import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'
import { recipe } from '@vanilla-extract/recipes'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const baseCheckboxRootStyles = style([
  sprinkles({
    width: 6,
    height: 6,

    borderRadius: 'xs',
  }),
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    boxSizing: 'border-box',

    lineHeight: 0,

    padding: 0,

    cursor: 'pointer',

    background: 'transparent',

    border: `2px solid ${vars.colors.contentTertiary}`,

    selectors: {
      '&[data-state="checked"]': {
        backgroundColor: vars.colors.contentPrimary,
        border: `2px solid ${vars.colors.contentPrimary}`,

        animation: `background ${fadeIn} 200ms ease-out`,
      },

      '&:focus, &[data-state="checked"]': {
        border: `2px solid ${vars.colors.contentPrimary}`,
      },

      '&[data-state="unchecked"]': {
        animation: `background ${fadeOut} 200ms ease-out`,
      },

      '&[data-state="unchecked"]&[data-disabled]': {
        border: `2px solid ${vars.colors.contentStateDisabled}`,

        cursor: 'not-allowed',
      },

      '&[data-state="checked"]&[data-disabled]': {
        backgroundColor: vars.colors.contentStateDisabled,
        border: `2px solid ${vars.colors.contentStateDisabled}`,

        cursor: 'not-allowed',
      },
    },
  },
])

export const checkboxRootStyles = recipe({
  base: baseCheckboxRootStyles,

  variants: {
    variant: {
      default: style([
        {
          border: `2px solid ${vars.colors.contentTertiary}`,

          selectors: {
            '&[data-state="checked"]': {
              backgroundColor: vars.colors.contentPrimary,
              border: `2px solid ${vars.colors.contentPrimary}`,

              animation: `background ${fadeIn} 200ms ease-out`,
            },

            '&:focus, &[data-state="checked"]': {
              border: `2px solid ${vars.colors.contentPrimary}`,
            },

            '&[data-state="unchecked"]': {
              animation: `background ${fadeOut} 200ms ease-out`,
            },

            '&[data-state="unchecked"]&[data-disabled]': {
              border: `2px solid ${vars.colors.contentStateDisabled}`,

              cursor: 'not-allowed',
            },

            '&[data-state="checked"]&[data-disabled]': {
              backgroundColor: vars.colors.contentStateDisabled,
              border: `2px solid ${vars.colors.contentStateDisabled}`,

              cursor: 'not-allowed',
            },
          },
        },
      ]),
      positive: style([
        {
          border: `2px solid ${vars.colors.contentTertiary}`,

          selectors: {
            '&[data-state="checked"]': {
              backgroundColor: vars.colors.backgroundPositive,
              border: `2px solid ${vars.colors.backgroundPositive}`,

              animation: `background ${fadeIn} 200ms ease-out`,
            },

            '&:focus, &[data-state="checked"]': {
              border: `2px solid ${vars.colors.backgroundPositive}`,
            },

            '&[data-state="unchecked"]': {
              animation: `background ${fadeOut} 200ms ease-out`,
            },

            '&[data-state="unchecked"]&[data-disabled]': {
              border: `2px solid ${vars.colors.contentStateDisabled}`,

              cursor: 'not-allowed',
            },

            '&[data-state="checked"]&[data-disabled]': {
              backgroundColor: vars.colors.contentStateDisabled,
              border: `2px solid ${vars.colors.contentStateDisabled}`,

              cursor: 'not-allowed',
            },
          },
        },
      ]),
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const checkboxIndicatorStyles = style([
  sprinkles({
    color: 'contentInversePrimary',
    width: 4,
    height: 4,
  }),
  {
    selectors: {
      '&[data-state="checked"]': {
        animation: `${fadeIn} 200ms ease-out`,
      },
      '&[data-state="unchecked"]': {
        animation: `${fadeOut} 200ms ease-out`,
      },
    },
  },
])
