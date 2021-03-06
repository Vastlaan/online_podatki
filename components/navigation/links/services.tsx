import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import {respond, fonts, ListItem, Line} from '../../../styles'
import {BiChevronDown} from 'react-icons/bi'
import {ListItemProps} from '../../../types'
import {checkViewportWidth} from '../../../styles/utils'
import en from '../../../translations/en/navigation'
import pl from '../../../translations/pl/navigation'

interface ServicesProps{
  isActive: (string)=>boolean
}

export default function ServicesItemComponent({isActive}:ServicesProps) {

  const router = useRouter()

  const {locale } = router

  const translations = locale==='en'?en:pl

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSmall, setIsSmall] = useState(false)

  useEffect(()=>{
  
    function adjustMenu(){
      if(checkViewportWidth(768)){
        setIsSmall(true)
      }else{
        setIsSmall(false)
      }
    }

    adjustMenu()

    window.addEventListener('resize', adjustMenu)

    return ()=>window.removeEventListener('resize', adjustMenu)

  },[])

  if(isSmall){
    return(
      <>

      <Line/>
      <Link href='/services'>
        <ListItem>{translations.services || "Usługi"}</ListItem>
      </Link>
  
      </>
    )
  }else{
    return(
      <ServicesItem onClick={()=>setIsServicesOpen(prevState=>!prevState)} active={isActive('/services')}>
        {translations.services || "Usługi"}  <BiChevronDown/>
        {isServicesOpen && <Group>
          <Link href='/services/taxes'>
            <ListItemBottom>{translations.taxes || "Rozliczenia Podatkowe"}</ListItemBottom>
          </Link>
          <Link href='/services/benefits'>
            <ListItemBottom>{translations.benefits || "Zasiłki"} </ListItemBottom>
          </Link>
          <Link href='/services/subsidies'>
            <ListItemBottom>{translations.subsidies || "Dotacje"}</ListItemBottom>
          </Link>
          <Link href='/services/administration'>
            <ListItemBottom>{translations.administration || "Administracja"}</ListItemBottom>
          </Link>
          <Link href='/services/other'>
            <ListItemBottom>{translations.others || "Pozostałe usługi"}</ListItemBottom>
          </Link>
        </Group>}
      </ServicesItem>
    )
  }
}


const Group = styled.div`
  position: absolute;
  top: 100%;
  left: -1.4rem;
  padding: 1.4rem;
  border: 2px solid  ${p=>p.theme.primaryDark};
  width: 25rem;
  background-color: ${p=>p.theme.primary};
  box-shadow: 0 1rem 1rem rgba(0,0,0,.3);
  z-index: 91;
`
const ServicesItem = styled.div<ListItemProps>`
  display: inline-block;
  border: none;
  background-color: transparent;
  font-family: ${fonts.heading};
  font-weight: 500;
  font-size: 1.9rem;
  color: ${p=>p.theme.white};
  margin: 1.4rem;
  padding: .1rem 0;
  cursor: pointer; 
  position: relative;
  display: flex;
  align-items: center;
  
  ${()=>respond('m','margin: 0 1.4rem 0 0')}

   &::before{
      content: '';
      position: absolute;
      top: ${p=>p.active?'0':'-.5rem'};
      left:0;
      width: 100%;
      height: 2px;
      transition: all .3s;
      background-color: ${p=>p.active?p.theme.secondaryLight:'transparent'};
    }

  &:hover{

    &::before{
      top: 0rem;
      background-color: ${p=>p.theme.secondaryLight};
    }
  }
`
const ListItemBottom = styled.li<ListItemProps>`
  font-family: ${fonts.heading};
  font-weight: 300;
  font-size: 1.9rem;
  color: ${p=>p.theme.white};
  margin: 1.4rem;
  padding: .1rem 0;
  cursor: pointer; 
  position: relative;
  display: flex;
  align-items: center;
  
  ${()=>respond('m','margin: 0 1.4rem 0 0')}

  &::after{
      content: '';
      position: absolute;
      bottom: -.5rem;
      left:0;
      width: 100%;
      height: 2px;
      transition: all .3s;
      background-color: transparent;
    }

  &:hover{
    &::after{
      bottom: 0rem;
      background-color: ${p=>p.theme.secondaryLight};
    }

  }
`
