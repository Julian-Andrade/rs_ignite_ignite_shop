import { useState } from 'react'
import { useCart } from '@/hooks/useCart'

import axios from 'axios'

import { toast } from 'react-toastify'

import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import CartButton from './CartButton'

import { X } from 'phosphor-react'
import {
  CartContainer,
  CartContainerClose,
  CartProduct,
  CartProductImage,
  CartProductContent,
  CardQuantityContainer,
  CardTotalContainer,
  CardCheckoutButton,
} from './styles'

export default function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      toast.error('Falha ao redicionar ao checkout')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContainer>
          <CartContainerClose>
            <X size={28} weight='bold' />
          </CartContainerClose>

          <h1>Sacola de compras</h1>

          <section>
            {cartQuantity <= 0 && (
              <span>Não foram encontrados items no carrinho!</span>
            )}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    src={cartItem.imageUrl}
                    width={100}
                    height={90}
                    alt=''
                  />
                </CartProductImage>
                <CartProductContent>
                  <h2>{cartItem.name}</h2>
                  <span>{cartItem.price}</span>
                  <button onClick={() => removeCartItem(cartItem.id)}>
                    Remover
                  </button>
                </CartProductContent>
              </CartProduct>
            ))}
          </section>

          <footer>
            <CardQuantityContainer>
              <p>Quantidade</p>
              <span>
                {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}
              </span>
            </CardQuantityContainer>

            <CardTotalContainer>
              <p>Valor total</p>
              <span>{formattedCartTotal}</span>
            </CardTotalContainer>

            <CardCheckoutButton
              disabled={isCreatingCheckoutSession || cartQuantity <= 0}
              onClick={handleCheckout}
            >
              Finalizar compra
            </CardCheckoutButton>
          </footer>
        </CartContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
