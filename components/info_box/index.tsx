import {ReactElement, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {ContainerAnimated, FlexCol, Heading6, Text} from '../../styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {FlexibleComponentProps} from '../../types'

interface BoxProps{
  delay?: number;
  icon: ReactElement;
  heading: string;
  text: string;
  background?: string;

}
export default function BoxComponent({delay, icon, heading, text, background}:BoxProps) {

  const target = useRef()

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(target.current, {autoAlpha: 1, y:0, duration: 1, delay: delay});
    ScrollTrigger.create({
      trigger: target.current, 
      start: "top 90%",
      onEnter: () => anim.restart(true)
    });
  },[])

  return (

    <ContainerAnimated ref={target}>
      <Background background={background && background}>
        <FlexCol padding="1.4rem" margin='1.4rem'>

          <Icon>
            {icon}
          </Icon>
          
          <Heading6 margin='1.4rem auto'>{heading}</Heading6>

          <Text>{text}</Text>

        </FlexCol>
      </Background>
    </ContainerAnimated>
    
  )
}

const Background = styled.div<FlexibleComponentProps>`
  background-color: ${p=>p.background?p.background: 'transparent'}
`

const Icon = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;

  svg{
    font-size: 4.7rem;
    color: ${p=>p.theme.secondary};
  }
`
