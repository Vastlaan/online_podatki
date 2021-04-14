import {useRouter} from 'next/router';
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {respond, fonts, ContainerNarrow, FlexRow, ListItem, ButtonSecondary} from '../../../styles'
import {BiChevronDown} from 'react-icons/bi'


interface LinksProps{
  isOpen: boolean;
}

export default function LinksComponent({isOpen}:LinksProps) {

  const router = useRouter()

  function isActive(href){
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
        <Link href='/'>
        <ListItem active={isActive('/uslugi')}>Usługi  <BiChevronDown/></ListItem>
        </Link>
        <Link href='/'>
        <ListItem active={isActive('/aktualnosci')}>Aktualności</ListItem>
        </Link>
        <Link href='/downloads'>
        <ListItem active={isActive('/downloads')}>Do pobrania</ListItem>
        </Link>
        <Link href='/contact'>
          <ButtonSecondary>
            Kontakt
          </ButtonSecondary>
        </Link>
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
  margin-left: auto;
  position: absolute;
  right: ${p=>p.isOpen?'0':'-100%'};
  top: 0;
  transition: all .3s;
  background-color: ${p=>p.theme.primaryDark};

  ${p=>respond('m',`flex-direction: row; 
  position: static;
  background-color: transparent;
  padding: 0;
  width: auto;
  justify-content: flex-end;

  `)}
`

