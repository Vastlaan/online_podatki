import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {respond, FlexRow, Company, ContainerNarrow} from '../../styles'
import {checkViewportWidth} from '../../styles/utils'
import {IoMenuOutline} from 'react-icons/io5'
import List from './list_of_links'

export default function LinksComponent() {

  const [isSmall, setIsSmall] = useState(true)
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

  useEffect(()=>{

    function adjustStyle(){
      return checkViewportWidth(768)?setIsSmall(true):setIsSmall(false)
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  function switchMenu(){
    setIsMenuDisplayed(prevState=>!prevState)
  }


  return (
    <Links>
      <ContainerNarrow>
        <FlexRow>
          <Link href='/'>
            <Company color="black" margin='0 auto 0 0'><span>B</span>oekhoud</Company>
          </Link>

          {isSmall && <Icon onClick={switchMenu}><IoMenuOutline/></Icon>}

          <List isMenuDisplayed={isMenuDisplayed}/>
        </FlexRow>
      </ContainerNarrow>
    </Links>
  )
}

const Links = styled.div`
  background-color: ${p=>p.theme.white};
  box-shadow: 1rem 0 1rem rgba(0,0,0,.6);
  padding: 0 0 0 1.4rem;
  position: relative;
`
const Icon = styled.button`
  background-color: transparent;
  display: flex;
  aling-items: center;
  justify-content: center;

  &:focus, :active {
    outline: none;
  }

  svg{
    font-size: 4.7rem;
    color: ${p=>p.theme.secondary};
  }
`