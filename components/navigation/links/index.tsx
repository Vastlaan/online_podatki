import {useRouter} from 'next/router';
import styled from 'styled-components'
import Link from 'next/link'
import Services from './services'
import {respond, fonts, ListItem, ButtonSecondary} from '../../../styles'
import {MdPhone} from 'react-icons/md'
import {ListItemProps} from '../../../types'



interface LinksProps{
  isOpen: boolean;
}

export default function LinksComponent({isOpen}:LinksProps) {

  const router = useRouter()

  function isActive(href:string){
    if(router.asPath === href || router.asPath === `/en${router.asPath}`){
      return true
    }
    return false
  }

  return (
    <Links isOpen={isOpen}>
      <Link href='/'>
        <ListItem active={isActive('/')}>Strona Główna</ListItem>
      </Link>

      <Services isActive={isActive}/>

      <Link href='/news'>
        <ListItem active={isActive('/news')}>Aktualności</ListItem>
      </Link>
      <Link href='/downloads'>
        <ListItem active={isActive('/downloads')}>Do pobrania</ListItem>
      </Link>
      <Link href='/contact'>
        <ListItem active={isActive('/contact')}>Kontakt</ListItem>
      </Link>
      <a href='tel:0031630159193'>
        <ButtonSecondary>
          <MdPhone/>
          +31 630 159 193
        </ButtonSecondary>
      </a>
    </Links>
  )
}

const Links = styled.ul<LinksProps>`
  list-style: none;
  padding: 2.7rem;
  padding-top: 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: auto;
  position: absolute;
  right: ${p=>p.isOpen?'0':'-100%'};
  top: 0;
  transition: all .3s;
  background-color: ${p=>p.theme.primaryDark};

  ${p=>respond('m',`flex-direction: row;
  align-items: stretch; 
  position: static;
  background-color: transparent;
  padding: 0;
  width: auto;
  justify-content: flex-end;

  `)}
`

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