import styled from 'styled-components'
import Cards from './cards'
import {respond,FlexCol, Heading1, Heading6, Text, SectionWide, ContainerNarrow} from '../../../styles'

export default function PackagesComponent() {
  return (
    <SectionWide background='#ebedeb' padding='4.7rem 2.7rem' margin='6.7rem 0 0 0'>
      <ContainerNarrow>

        <FlexCol>

          <Heading1 margin='2.7rem 0' align='center'>Tarieven</Heading1>

          <Cards />

          <FlexCol background='#fff' padding='2.7rem' margin='2.7rem auto' align='flex-start'>
            <Heading6 align='left'>Heb je een B.V.?</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              Bovenstaande prijzen voor je boekhouding gelden voor ondernemingen in een eenmanszaak of v.o.f..
              Mocht je nu een BV in de regio Noord Holland hebben, dan vragen wij per maand €20,- extra voor bovenstaande pakketten
            </Text>
            <Heading6 align='left'>Heb je een webshop?</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              Ons boekhoudpakket is prima in staat om gekoppeld te worden met verschillende soorten software. De extra kosten voor deze koppelingen vallen buiten de bovenstaande tarieven.
              Bovendien kunnen wij onze dienstverlening voor aanbieden vanaf het Professional-pakket.
            </Text>
          </FlexCol>

        </FlexCol>

      </ContainerNarrow>
    </SectionWide>
  )
}

