import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,

  padding: '3rem',
  paddingTop: '4.5rem',
  width: '30rem',

  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },

  footer: {
    marginTop: 'auto',
  },
})

export const CartContainerClose = styled(Dialog.Close, {
  background: 'none',
  borderColor: 'transparent',

  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  color: '$gray300',
})

export const CartProduct = styled('section', {
  width: '100%',

  display: 'flex',
  marginBottom: '2rem',
})

export const CartProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  marginRight: '1.125rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$md',
    fontWeight: '400',
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',

    color: '$green500',
    background: 'none',
    border: 'none',

    fontSize: '$rg',
    fontWeight: 'bold',
  },
})

export const CardQuantityContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  fontSize: '$rg',
  color: '$gray300',

  span: {
    fontSize: '$md',
  },
})

export const CardTotalContainer = styled('div', {
  marginTop: '0.5em',
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$gray100',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$xl',
  },
})

export const CardCheckoutButton = styled('button', {
  width: '100%',
  marginTop: '3.6rem',
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  color: '$white',
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
