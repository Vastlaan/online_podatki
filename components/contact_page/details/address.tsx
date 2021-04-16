import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, FlexCol, ContactBox, Icon, Text3} from '../../../styles'
import {RiMapPinFill} from 'react-icons/ri'

export default function AddressComponent() {

  const target = useRef()

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(target.current, {autoAlpha: 1, y:0, x:0, duration: 1});
    ScrollTrigger.create({
      trigger: target.current, 
      start: "top 90%",
      onEnter: () => anim.restart(true)
    });
  },[])


  return (
    <ContainerAnimated animation='mx' ref={target}>
      <ContactBox>
        <Icon>
          <RiMapPinFill/>
        </Icon>
        <FlexCol margin='1.4rem 0'>
          <Text3>Lakenblekerstraat 24</Text3>
          <Text3>1431GG <span>Aalsmeer</span></Text3>
      </FlexCol>
    </ContactBox>
  </ContainerAnimated>
  )
}
