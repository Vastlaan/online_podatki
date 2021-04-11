import styled from 'styled-components'
import Link from 'next/link'
import { respond, Company} from '../../styles'

interface ListProps{
  isMenuDisplayed: boolean;
}
interface Menu{
  active: boolean;
}

export default function ListLargeComponent({isMenuDisplayed}:ListProps) {

  return (
    <Menu active={isMenuDisplayed}>
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
  )
}

const Menu = styled.ul<Menu>`
  padding: 2.7rem 1.4rem;
  background-color: ${p=>p.theme.white};
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: absolute;
  top: 100%;
  left: ${p=>p.active?'-100%':'0'};
  transition: all .3s;

  ${()=>respond('m','flex-direction: row; position: static; justify-content: flex-end; align-items: center; padding: 0;')}

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
