import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, FlexCol, ContactBox, Icon, Anchor, Text3} from '../../../styles'
import {MdEmail} from 'react-icons/md'

export default function PhoneComponent() {

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
    <ContainerAnimated animation='px' ref={target}>
      <ContactBox>      
        <Icon>
          <MdEmail/>
        </Icon>
        <FlexCol margin='1.4rem 0'>
          <Text3>Wyślij <span>E-mail</span></Text3>
          <Anchor href="mailto:info@onlinepodatki.eu">
              <Text3>info@onlinepodatki.eu</Text3>
          </Anchor>
        </FlexCol>
      </ContactBox>
    </ContainerAnimated>
  )
}