import { IProduct } from '@/contexts/CartContext'
import { NextApiRequest, NextApiResponse } from 'next'
import { toast } from 'react-toastify'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: IProduct[] }

  if (req.method !== 'POST') {
    return res.status(405).json(toast.error('Método não permitido.'))
  }

  if (!products) {
    return res.status(400).json(toast.error('Produto não encontrado.'))
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
