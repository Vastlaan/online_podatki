import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
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

        <ImageBox>
          <Image src='/img/decoration_1.svg' alt='decoration' layout='fill'/>
        </ImageBox>

        {/* <Text margin='1.4rem auto' color='white'>Zadzwoń do nas!</Text>

        <ButtonPrimary >
          <IoMdCall/>
          +48 500 424 583
        </ButtonPrimary>

         <Text margin='1.4rem auto'></Text>

        <ButtonSecondary >
          <IoMdCall/>
          +31 630 159 193
        </ButtonSecondary> */}

      </FlexCol>
    </Side>
    
  )
}

const Side = styled.aside`
  padding: 2.7rem 1.4rem;
  transform: translate(100px, 0);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: -7.7rem;
  right: 0;
  z-index: 4;

  ${()=>respond('m',' bottom: 1.4rem; padding: 1.4rem;')}
`
const ImageBox = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  ${()=>respond('m',' width: 25rem; height: 25rem;')}
`
