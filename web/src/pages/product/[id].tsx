import { IProduct } from '@/contexts/CartContext'
import { useCart } from '@/hooks/useCart'

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  if (isFallback) {
    return <p>Carregando...</p>
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={itemAlreadyInCart}
            onClick={() => addToCart(product)}
          >
            {itemAlreadyInCart
              ? 'Produto encontra-se no carrinho'
              : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NTeHQ5XBKrRUfQ' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount
          ? new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price.unit_amount / 100)
          : 0,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 01 Hour
  }
}
