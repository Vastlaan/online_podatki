import styled from 'styled-components'
import {useRouter} from 'next/router'
import Card from '../../card'
import {respond} from '../../../styles'
import en from '../../../translations/en/landing_page/packages/cards'
import pl from '../../../translations/pl/landing_page/packages/cards'

export default function CardsComponents() {
  const router = useRouter()
  const {locale } = router
  const translations = locale==='en'?en:pl
  return (
    <>
    <Boxes>
      <Card heading={translations.card1_heading} text={translations.card1_text} price='40' link='/services/taxes'/>
      <Card heading={translations.card2_heading} text={translations.card2_text} price='100' link='/services/administration'/>
    </Boxes>
    <Boxes>
      <Card heading={translations.card3_heading} text={translations.card3_text} price='40' link='/services/subsidies'/>
      <Card heading={translations.card4_heading} text={translations.card4_text} price='50' link='/services/benefits'/>
    </Boxes>
    </>
  )
}

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  ${()=>respond('m','flex-direction: row; flex-wrap: wrap;')}
`
