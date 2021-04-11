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
        <Heading1 align='center' margin='0 auto 2.7rem auto'>Onze Vaardigheden</Heading1>
        <Boxes>
          <InfoBox 
           
            icon={<IoMdTimer/>} 
            heading='Tijdbesparend' 
            text='Als ondernemer doe je het liefst, waar je goed in bent (en waar je je geld mee verdient). De boekhouding is niet echt jouw ding. Met een paar minuten per maand zorg jij er voor dat wij met jouw boekhouding aan de slag kunnen. Heel efficiënt dus.'/>
          <InfoBox
            delay={1}
            icon={<AiOutlineBarChart/>} 
            background='#ebedeb'
            heading='Inzicht' 
            text='Wij verwerken jouw papierwinkel op zo’n manier dat het duidelijk is wat er moet gebeuren. Onze online rapportage tool zorgt ervoor dat jij inzicht hebt in je financiële huishouden. Zo hoef je je daar geen zorgen over te maken.'/>
          <InfoBox
           
            icon={<IoRocketOutline/>} 
            heading='Snelle response' 
            text='Wij nemen onze telefoon op. En lukt dat eens niet? Dan streven we ernaar om dezelfde dag terug te bellen. Bij mailen gaat hetzelfde op: over het algemeen reageren we vaak nog dezelfde dag. Waarom iets morgen doen als het vandaag al kan?'/>
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

  ${()=>respond('m','flex-direction: row')}
`
