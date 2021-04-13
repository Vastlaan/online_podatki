import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Links from './links'
import MenuButton from './menu_button'
import {ContainerNarrow, FlexRow} from '../../styles'
import {checkViewportWidth} from '../../styles/utils'


interface NavigationProps{
  background: boolean;
}

export default function NavigationComponent() {

  const [isSmall, setIsSmall] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState(false)

  useEffect(()=>{

    function adjustStyle(){
      return checkViewportWidth(768)?setIsSmall(true):setIsSmall(false)
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  useEffect(()=>{

    function adjustBackground(){

      if(window.scrollY >20){
        setBackground(true)
      }else{
        setBackground(false)
      }
    }
    adjustBackground()
    window.addEventListener('scroll', adjustBackground)

    return ()=>window.removeEventListener('scroll', adjustBackground)
  },[])

  return (
    <Navigation background={background}>
      <ContainerNarrow padding='0 1.4rem'>
        <FlexRow justify='space-between'>

          <Logo />

          {isSmall && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>}

          <Links isOpen={isOpen}/>

        </FlexRow>
      </ContainerNarrow>
      
    </Navigation>
  )
}

const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  transition: all .3;
  background-color: ${p=>p.background?p.theme.primaryDark:'transparent'};
  //background-image: linear-gradient(to bottom, rgba(70, 141, 204, .9), rgba(70, 141, 204, .3) );
  
`
