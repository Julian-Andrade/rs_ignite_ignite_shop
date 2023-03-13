import { styled } from '../../../styles'

export const CartButtonContainer = styled('button', {
  width: '3rem',
  height: '3rem',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$gray800',
  color: '$gray500',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },
      },
    },
  },
})
