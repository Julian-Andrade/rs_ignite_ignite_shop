import { CartButtonContainer } from './styles'
import { Handbag } from 'phosphor-react'
import { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export default function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag size={28} weight='bold' />
    </CartButtonContainer>
  )
}
