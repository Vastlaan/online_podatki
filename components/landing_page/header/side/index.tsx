import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Link from 'next/link'
import {respond, ButtonPrimary, ButtonSecondary, Heading3, Text, FlexCol, Line, List, Item} from '../../../../styles'
import { IoMdCall, IoIosMail } from "react-icons/io";
import {BsChevronRight} from 'react-icons/bs'

export default function SideComponent() {

  const target = useRef()

  useEffect(()=>{
    gsap.to(target.current, {autoAlpha: 1, x: 0, duration: .6} )
  },[])
  return (
    <Side ref={target}>
      <FlexCol>

        <Heading3 color='white'>
          Nasze Usługi:
        </Heading3>

        <List margin='1.4rem 0'>
          <Link href='/'>
            <Item color='white' margin='.9rem 0'> <BsChevronRight/> Rozliczenia Podatkowe</Item>
          </Link>
          <Link href='/'>
            <Item color='white' margin='.9rem 0'> <BsChevronRight/> Administracja</Item>
          </Link>
          <Link href='/'>
            <Item color='white' margin='.9rem 0'> <BsChevronRight/> Pozyskiwanie zasiłków</Item>
          </Link>
          <Link href='/'>
            <Item color='white' margin='.9rem 0'> <BsChevronRight/> Pozyskiwanie dotacji</Item>
          </Link>
        </List>

        <Text margin='1.4rem auto' color='white'>Zadzwoń do nas!</Text>

        <ButtonPrimary >
          <IoMdCall/>
          +48 500 424 583
        </ButtonPrimary>

         <Text margin='1.4rem auto'></Text>

        <ButtonSecondary >
          <IoMdCall/>
          +31 630 159 193
        </ButtonSecondary>

      </FlexCol>
    </Side>
    
  )
}

const Side = styled.aside`
  padding: 2.7rem 1.4rem;
  transform: translate(100px, 0);
  opacity: 0;
  visibility: hidden;

  ${()=>respond('m','padding: 0 1.4rem;')}
`

