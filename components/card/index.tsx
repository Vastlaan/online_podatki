import {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styled from 'styled-components'
import {fonts, FlexCol, Heading3, Text, ButtonSecondary} from '../../styles'
import {IoIosArrowRoundForward} from 'react-icons/io'


interface CardProps{
  link: string;
  heading: string;
  price: string;
  text: string;
}

export default function CardComponent({heading, price, text, link}:CardProps) {

  const target = useRef()

  const router = useRouter()

  const {locale} = router

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(target.current, {autoAlpha: 1, duration:1, scrollTrigger:{
      trigger: target.current, 
      start: "top 80%",
      toggleActions: "restart none none reset",
    } })
  },[])

  return (
    <Card ref={target}>
      <Heading3 padding='1.4rem'>{heading}</Heading3>
      
      <Price><sub>{locale==='en'?"from":"od"}</sub>&nbsp; <p>&euro;{price}</p>&nbsp; <sup> {locale==='en'?"gross":"brutto"}</sup></Price>
      <Text padding='1.4rem'>{text}</Text>
      <Link href={link}>
        <ButtonSecondary wide='100%'>{locale==='en'?"More":"Więcej"} <IoIosArrowRoundForward /></ButtonSecondary>
      </Link>
      
    </Card>
  )
}

const Card = styled.div`
  width: 30rem;
  padding: 1.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1.4rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  opacity: 0;
  visibility: hidden;
`

const Price = styled.div`
  width: 100%;
  padding: .9rem 1.4rem;
  background-color: ${p=>p.theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 3.7rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }

  sub{
    display: inline-block;
    transform: translateY(-1rem);
    font-size: 1.2rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }
  sup{
    display: inline-block;
    transform: translateY(1rem);
    font-size: 1.2rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }
  
`