import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <ToastContainer autoClose={1500} />
      </Container>
    </CartContextProvider>
  )
}
