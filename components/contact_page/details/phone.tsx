import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ContainerAnimated, FlexCol, ContactBox, Icon, Anchor, Text3} from '../../../styles'
import {MdPhone} from 'react-icons/md'

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
    <ContainerAnimated ref={target}>
      <ContactBox>      
        <Icon>
          <MdPhone/>
        </Icon>
        <FlexCol margin='1.4rem 0'>
          <Anchor href="tel:0031630159193">
              <Text3><span>NL</span> +31 630 159 193</Text3>
          </Anchor>
          <Anchor href="tel:0048500424583">
              <Text3><span>PL</span> +48 500 424 583</Text3>
          </Anchor>
        </FlexCol>
      </ContactBox>
    </ContainerAnimated>
  )
}