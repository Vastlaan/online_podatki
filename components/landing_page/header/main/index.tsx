import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import gsap from 'gsap'
import { Heading1, Text} from '../../../../styles'
import Buttons from './buttons'
import {checkViewportWidth} from '../../../../styles/utils'
import {FlexibleComponentProps} from '../../../../types'
import en from '../../../../translations/en/landing_page/header/main'
import pl from '../../../../translations/pl/landing_page/header/main'

export default function MainComponent() {

  const router = useRouter()
  const {locale } = router
  const translations = locale==='en'?en:pl

  const [responsiveAlligment, setResponsiveAlligment] = useState("left")
  const [responsiveFlexAlligment, setResponsiveFlexAlligment] = useState("flex-start")

  const target = useRef()

  useEffect(()=>{

    gsap.to(target.current, {autoAlpha: 1, x: 0, duration: .6} )

    function adjustStyle(){
       checkViewportWidth(539)?setResponsiveAlligment("center"):setResponsiveAlligment("left")
       return checkViewportWidth(539)?setResponsiveFlexAlligment("center"):setResponsiveFlexAlligment("flex-start")
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  return (
    <Main align={responsiveFlexAlligment} ref={target}>

      <Heading1 wide='58rem' color='white' align={responsiveAlligment}>
        {translations.heading_1}<span>{translations.heading_2}</span>{translations.heading_3}
      </Heading1>

      <Text color='#ebedeb' align={responsiveAlligment} margin='1.4rem 0'>
        {translations.body_1}<span>{translations.country_1}</span>, <span>{translations.country_2}</span>, <span>{translations.country_3}</span> {locale==='en'?'and':'i'} <span>{translations.country_4}</span>. 
        {translations.body_2}
      </Text>

      <Buttons btn1={translations.btn_1} btn2={translations.btn_2}/>

    </Main>
  )
}

const Main = styled.div<FlexibleComponentProps>`
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
  transform: translate(-100px, 0);
  opacity: 0;
  visibility: hidden;
`