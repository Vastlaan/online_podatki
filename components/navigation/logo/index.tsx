import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <Link href='/'>
      <Logo>
        <Image src="/img/logo_white.png" alt="logo" width='180' height='65'/>
      </Logo>
    </Link>
  )
}

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: .9rem;
  position: relative;
  width: 19rem;
  height: 7rem;
  z-index: 99;
  cursor: pointer;
`
