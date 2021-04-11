import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Ranking from './ranking'
import Buttons from './buttons'
import { respond, SectionWide, ContainerNarrow, FlexCol, Heading1, Text} from '../../../styles'
import {checkViewportWidth} from '../../../styles/utils'

export default function Rank1() {

  const [responsiveAlligment, setResponsiveAlligment] = useState("center")
  const [responsiveAlligmentText, setResponsiveAlligmentText] = useState("center")

  useEffect(()=>{

    function adjustStyle(){
      checkViewportWidth(768)?setResponsiveAlligmentText("center"):setResponsiveAlligmentText("right")
      return checkViewportWidth(768)?setResponsiveAlligment("center"):setResponsiveAlligment("flex-end")
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  return (
    <SectionWide margin='6.7rem 0' padding='4.7rem 1.4rem'>

      <ImageContainer/>
      
      <ContainerNarrow>
        <FlexCol padding='2.7rem' align={responsiveAlligment}>

          <Heading1 align={responsiveAlligmentText}>Ideaal voor de zzp’er en iedere andere <span>ondernemer</span></Heading1>
          
          <Text align={responsiveAlligmentText}>Van iedere ZZP’er kunnen wij de administratie doen. Onze boekhouder helpt ook bij alle andere soorten ondernemingen.</Text>

          <Buttons />

          <Ranking />
          
        </FlexCol>
      </ContainerNarrow>
    </SectionWide>
  )
}


const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  width: 70%;
  z-index: -1;

  &::before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(to right, rgba(255,255,255,.3), rgba(255,255,255,1)),url('/img/header-3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: grayscale(100%);
  }
`

