import {useRouter} from 'next/router';
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import Services from './services'
import {respond, fonts, ListItem, ButtonSecondarySmall} from '../../../styles'
import {MdPhone} from 'react-icons/md'
import en from '../../../translations/en/navigation'
import pl from '../../../translations/pl/navigation'



interface LinksProps{
  isOpen: boolean;
}

export default function LinksComponent({isOpen}:LinksProps) {

  const router = useRouter()

  const {locale, asPath } = router

  const translations = locale==='en'?en:pl

  function isActive(href:string){
    if(router.asPath === href || router.asPath === `/en${router.asPath}`){
      return true
    }
    return false
  }

  return (
    <Links isOpen={isOpen}>
      <Link href='/'>
        <ListItem active={isActive('/')}>{translations.home || "Strona Główna"}</ListItem>
      </Link>

      <Services isActive={isActive}/>

      <Link href='/news'>
        <ListItem active={isActive('/news')}>{translations.news || "Aktualności"}</ListItem>
      </Link>
      <Link href='/downloads'>
        <ListItem active={isActive('/downloads')}>{translations.downloads || "Do pobrania"}</ListItem>
      </Link>
      <Link href='/contact'>
        <ListItem active={isActive('/contact')}>{translations.contact || "Kontakt"}</ListItem>
      </Link>
      {locale==='pl'?
        <Link href={asPath} locale="en">
          <Flag>
            <Image src='/img/united-kingdom-flag.svg' alt='united kingdom flag' width='35' height='35'/>
          </Flag>
        </Link> 
        :
        <Link href={asPath} locale="pl">
          <Flag>
            <Image src='/img/poland-flag.svg' alt='poland flag' width='35' height='35'/>
          </Flag>
        </Link>
      }
       
       
      <a href='tel:0031630159193'>
        <ButtonSecondarySmall>
          <MdPhone/>
          +31 630 159 193
        </ButtonSecondarySmall>
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

const Flag = styled.li`
  margin-right: 1.4rem;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    transform: scale(1.05);
  }
`