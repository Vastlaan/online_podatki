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