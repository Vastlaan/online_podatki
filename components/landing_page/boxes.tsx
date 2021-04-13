import styled from 'styled-components'
import InfoBox from '../info_box'
import {respond, SectionNarrow, FlexCol, Heading1} from '../../styles'
import {IoMdTimer} from 'react-icons/io'
import {IoRocketOutline} from 'react-icons/io5'
import {AiOutlineBarChart} from 'react-icons/ai'

export default function BoxesComopnent() {


  return (
    <SectionNarrow margin='4.7rem auto'>
      <FlexCol>
        <Heading1 align='center' margin='0 auto 2.7rem auto'>Co nas wyróżnia?</Heading1>
        <Boxes>
          <InfoBox 
            
            icon={<IoMdTimer/>} 
            heading='Oszczędność czasu' 
            text='Jako przedsiębiorca chcesz robić to, w czym jesteś dobry in na czym zarabiasz. Księgowość to nie Twoja sprawa. Poświęcając jedynie kilka minut na kontakt z nami, możesz być pewien, że Twoja księgowość będzie prowadzona skrupulatnie i należycie.'/>
          <InfoBox
            delay={1}
            icon={<AiOutlineBarChart/>} 
            background='rgba(70, 141, 204, .3)'
            heading='Efektywność' 
            text='Dla naszych klientów uzyskujemy zawsze najwyższe świadczenia. Doradzamy firmom i klientom indywidualnym, jak korzystać z ulg podatkowych, aby zachować jak najlepszą kondycję finansową. Nie trać czasu, powierz sprawy specjalistom.'/>
          <InfoBox
           
            icon={<IoRocketOutline/>} 
            heading='Szybkość działania' 
            text='Twoje sprawy są naszym pryiorytetem! Podejmujemy natychmiastowe działania, i reagujemy w sposób błyskawiczny, za każdym razem, kiedy nas potrzebujesz. Dzięki temu nie martwisz się niczym.'/>
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
