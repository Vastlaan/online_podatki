import styled from 'styled-components'
import Address from './address'
import Phone from './phone'
import Email from './email'
import {respond, SectionNarrow} from '../../../styles'


export default function DetailsComponent() {
  return (
    <SectionNarrow>
      <Details>
        
        <Address />

        <Phone />

        <Email/>

      </Details>
    </SectionNarrow>
    
  )
}

const Details = styled.div`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${()=>respond('m','flex-direction: row; align-items: stretch;')}
`



