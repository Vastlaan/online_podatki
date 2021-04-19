import styled from 'styled-components'
import {useRouter} from 'next/router'
import InfoBox from '../info_box'
import {respond, SectionNarrow, FlexCol, Heading1} from '../../styles'
import {IoMdTimer} from 'react-icons/io'
import {IoRocketOutline} from 'react-icons/io5'
import {AiOutlineBarChart} from 'react-icons/ai'
import en from '../../translations/en/landing_page/boxes'
import pl from '../../translations/pl/landing_page/boxes'

export default function BoxesComopnent() {

  const router = useRouter()
  const {locale } = router
  const translations = locale==='en'?en:pl

  return (
    <SectionNarrow margin='4.7rem auto'>
      <FlexCol>
        <Heading1 align='center' margin='0 auto 2.7rem auto'>{translations.heading_main}</Heading1>
        <Boxes>
          <InfoBox 
            animation="mx"
            icon={<IoMdTimer/>} 
            heading={translations.box1_heading} 
            text={translations.box1_text} />
          <InfoBox
            icon={<AiOutlineBarChart/>} 
            background='rgba(70, 141, 204, .3)'
            heading={translations.box2_heading} 
            text={translations.box2_text} />
          <InfoBox
            animation="px"
            icon={<IoRocketOutline/>} 
            heading={translations.box3_heading} 
            text={translations.box3_text} />
        </Boxes>
      </FlexCol>
    </SectionNarrow>
    
  )
}
const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${()=>respond('m','flex-direction: row; align-items: stretch;')}
`
