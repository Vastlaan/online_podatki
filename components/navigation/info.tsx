import styled from 'styled-components'
import { ContainerNarrow, FlexRow, Anchor} from '../../styles'
import { IoMdCall } from "react-icons/io";
import {ThemeProps} from '../../types'

export default function InfoComponent() {
  return (
    <Info>
      <ContainerNarrow>

        <FlexRow justify='space-between'>
          <Logo>
            <img src="/img/logo.svg" alt="logo"/>
          </Logo>
          <Anchor href="tel:0031682307051"><IoMdCall/> (+31) (0)6 82 30 70 51</Anchor>
        </FlexRow>
        

      </ContainerNarrow>  
    </Info>
  )
}

const Info = styled.div`
  padding: .3rem 1.4rem;
  background-color: ${(p : ThemeProps)=>p.theme.black};
`


const Logo = styled.div`
  display: flex;
  aling-items: center;
`
