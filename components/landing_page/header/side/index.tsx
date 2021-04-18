import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import Link from 'next/link'
import {respond, ButtonPrimary, ButtonSecondary, Heading3, Text, FlexCol, Line, Item} from '../../../../styles'
import { IoMdCall, IoIosMail } from "react-icons/io";
import {FiCheckSquare} from 'react-icons/fi'

export default function SideComponent() {

  const target = useRef()

  useEffect(()=>{
    gsap.to(target.current, {autoAlpha: 1, x: 0, duration: .6} )
  },[])
  return (
    <Side ref={target}>
      <FlexCol>
        
        <HiddenOnMobile>
          {/* <Heading3 color='white'>
            Nasze Usługi:
          </Heading3> */}

          <List>
            <Link href='/services/taxes'>
              <CustomItem> <FiCheckSquare/> Rozliczenia Podatkowe</CustomItem>
            </Link>
            <Link href='/services/administration'>
              <CustomItem> <FiCheckSquare/> Administracja firm</CustomItem>
            </Link>
            <Link href='/services/benefits'>
              <CustomItem> <FiCheckSquare/> Pozyskiwanie zasiłków</CustomItem>
            </Link>
            <Link href='/services/subsidies'>
              <CustomItem> <FiCheckSquare/> Pozyskiwanie dotacji</CustomItem>
            </Link>
          </List>
        </HiddenOnMobile>
        

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
const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin: 1.4rem 0;
  justify-content: flex-start;
`
const HiddenOnMobile = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${()=>respond('m','display: flex;')}
`

const CustomItem = styled.li`
  font-size: 1.6rem;
  padding-bottom: .4rem;
  color: white;
  transition: all .3s;
  border-bottom: 1px solid white;
  
  display: flex;
  align-items: center;
  margin: .9rem 0;
  cursor: pointer;

  &:hover{
    transform: translateX(1rem);
  }

  svg{
    font-size: 2.2rem;
    color: white;
    margin-right: .4rem;
  }
`

