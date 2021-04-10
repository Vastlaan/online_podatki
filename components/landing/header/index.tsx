import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Main from './main'
import Side from './side'
import { ContainerNarrow, MainGrid} from '../../../styles'
import {checkViewportWidth} from '../../../styles/utils'

export default function HeaderComponent() {

  const [responsivePadding, setResponsivePadding] = useState("0")

  useEffect(()=>{

    function adjustStyle(){
      return checkViewportWidth(996)?setResponsivePadding("2.7rem"):setResponsivePadding("0")
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  return (
     <Header>

      <ContainerNarrow margin="18rem auto 4.7rem auto" padding={responsivePadding}>

        <MainGrid>
          
          <Main/>

          <Side/>

        </MainGrid>
        
      </ContainerNarrow>

      <ImageContainer/>

    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: inline-block;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right:0;
  bottom: 0;
  width: 70%;
  z-index: -1;

  &::before{
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(to left, rgba(255,255,255,.3), rgba(255,255,255,1)),url('/img/header-2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
  }
  
`



