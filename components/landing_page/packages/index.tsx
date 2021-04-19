import {useRouter} from 'next/router'
import Cards from './cards'
import {FlexCol, Heading1, Heading6, Text, SectionWide, ContainerNarrow} from '../../../styles'
import en from '../../../translations/en/landing_page/packages'
import pl from '../../../translations/pl/landing_page/packages'

export default function PackagesComponent() {

  const router = useRouter()
  const {locale } = router
  const translations = locale==='en'?en:pl

  return (
    <SectionWide background='rgba(70, 141, 204, .3)' padding='4.7rem 0' margin='6.7rem 0 0 0'>
      <ContainerNarrow>

        <FlexCol>

          <Heading1 margin='2.7rem 0' align='center'>{translations.heading_main}</Heading1>

          <Cards />

          <FlexCol background='#fff' padding='2.7rem' margin='2.7rem auto' align='flex-start'>
            <Heading6 align='left'>{translations.heading_1}</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              {translations.body_1}
            </Text>
            <Heading6 align='left'>{translations.heading_2}</Heading6>
            <Text margin='2.7rem 0' align='left' wide='100%'>
              {translations.body_2}
            </Text>
          </FlexCol>

        </FlexCol>

      </ContainerNarrow>
    </SectionWide>
  )
}

