import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <Link href='/'>
      <Logo>
        <Image src="/img/logo_white.png" alt="logo" width='220' height='80'/>
      </Logo>
    </Link>
  )
}

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: .9rem;
  position: relative;
  width: 22rem;
  height: 8rem;
  z-index: 99;
  cursor: pointer;
`
