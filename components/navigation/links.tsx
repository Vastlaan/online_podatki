import styled from 'styled-components'
import Link from 'next/link'
import {Company, ContainerNarrow, FlexRow} from '../../styles'
import {ThemeProps} from '../../types'

export default function LinksComponent() {
  return (
    <Links>
      <ContainerNarrow>
        
        <Menu>
          <Link href='/'>
            <Company color="black" margin='0 auto 0 0'><span>B</span>oekhoud</Company>
          </Link>
          
          <Link href='/'>
            <li>
              Administartiekantoor
            </li>
          </Link>
          <Link href='/'>
            <li>
              Financiële rapportages
            </li>
          </Link>
          <Link href='/'>
            <li>
              Tariven
            </li>
          </Link>
           <Link href='/'>
            <li>
              Contact
            </li>
          </Link>
        </Menu>
      </ContainerNarrow>
    </Links>
  )
}

const Links = styled.div`
  background-color: ${p=>p.theme.white};
  box-shadow: 1rem 0 1rem rgba(0,0,0,.6);
  padding: 0 0 0 1.4rem;
`
const Menu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li{
    padding: .9rem 1.4rem;
    font-size: 1.6rem;
    font-weight:300;
    transition: all .3s;
    cursor: pointer;

    &:hover{
      background-color: ${p=>p.theme.black};
      color: ${p=>p.theme.white};
    }


    &:not(:last-of-type){
      padding: .9rem 1.4rem;
    }
  }
  

`