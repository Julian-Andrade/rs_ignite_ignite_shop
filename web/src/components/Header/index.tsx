import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import logoImg from '../../assets/logo.svg'

import Cart from '../Cart'

import { HeaderContainer } from './styles'

export default function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt='' priority />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
