import {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { Heading1, Text, FlexCol, Line,} from '../../../../styles'
import List from './list'
import Buttons from './buttons'
import {checkViewportWidth} from '../../../../styles/utils'
import {FlexibleComponentProps} from '../../../../types'

export default function MainComponent() {

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
        Profesjonalna obsługa księgowa <span>firm</span> i osób prywatnych
      </Heading1>

      <Text color='#ebedeb' align={responsiveAlligment} margin='1.4rem 0'>
        Nasze biuro rachunkowe gwarantuje kompleksową i profesjonalną obsługę księgową firm na terenie <span>Polski</span>, <span>Niemiec</span>, <span>Holandii</span> i <span>Belgii</span>. 
        Naszym klientom zapewniamy obsługę zarówno w zakresie usług księgowych, jak również bogatą gamę usług doradztwa gospodarczego.
      </Text>

      <Buttons/>

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