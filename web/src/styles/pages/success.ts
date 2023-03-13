import { styled } from '..'

export const SuccessContainer = styled('main', {
  margin: '0 auto',
  height: 656,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    color: '$green500',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
