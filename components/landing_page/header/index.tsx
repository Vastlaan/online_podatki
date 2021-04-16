import {useEffect, useState} from 'react'
import styled from 'styled-components'
import BackgroundEffects from './background_effects'
import Main from './main'
import Side from './side'
import { respond, ContainerNarrow, MainGrid, FlexCol, Heading1, Text, } from '../../../styles'
import {checkViewportWidth} from '../../../styles/utils'

export default function HeaderComponent() {

  // const [responsivePadding, setResponsivePadding] = useState("0")

  // useEffect(()=>{

  //   function adjustStyle(){
  //     return checkViewportWidth(996)?setResponsivePadding("2.7rem"):setResponsivePadding("0")
  //   }
  //   adjustStyle()
  //   window.addEventListener('resize', adjustStyle)

  //   return ()=>window.removeEventListener('resize', adjustStyle)
  // },[])

  return (
     <Header>

       <BackgroundEffects/>
       
       <Container>
         <ContainerNarrow>
            <MainGrid>
              
              <Main/>
              <Side/>
              
            </MainGrid>
         </ContainerNarrow>
        </Container>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  min-height: 95vh;
  overflow:hidden;
  display: inline-block;
  position: relative;

  ${()=>respond('xxl','min-height: 85vh;')}
`

const Container = styled.div`
  width: 100%;
  z-index: 10;
  padding: 13rem 0 6.7rem 0;
  background-image: linear-gradient(to bottom, rgba(70, 141, 204, .1), rgba(70, 141, 204, 1) 50%);

  ${()=>respond('m','background-image: none;')}
`




