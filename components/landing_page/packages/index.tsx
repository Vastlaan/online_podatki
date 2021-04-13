import styled from 'styled-components'
import Cards from './cards'
import {respond,FlexCol, Heading1, Heading6, Text, SectionWide, ContainerNarrow} from '../../../styles'

export default function PackagesComponent() {
  return (
    <SectionWide background='rgba(70, 141, 204, .3)' padding='4.7rem 0' margin='6.7rem 0 0 0'>
      <ContainerNarrow>

        <FlexCol>

          <Heading1 margin='2.7rem 0' align='center'>Taryfy</Heading1>

          <Cards />

          <FlexCol background='#fff' padding='2.7rem' margin='2.7rem auto' align='flex-start'>
            <Heading6 align='left'>Transparentość</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              Jasność, przejrzystość i zaufanie to podstawa, na której budujemy relacje z naszymi klientami.
              Dlatego przetwarzamy Twoje dokumenty w taki sposób, aby było wiadomo, co robimy i dlaczego.
              Zapewniamy całkowity i transparentny wgląd w Twoje finansowe sprawy.
            </Text>
            <Heading6 align='left'>Chcesz założyć własną firmę?</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              Błyskawicznie załatwimy za Ciebie formalności związane z rejestracją działalności gospodarczej, zajmujemy się kontaktami z urzędami, zapewnimy usługi księgowe oraz usługi rachunkowe.
            </Text>
          </FlexCol>

        </FlexCol>

      </ContainerNarrow>
    </SectionWide>
  )
}

