import styled from 'styled-components'
import Card from '../../card'
import {respond} from '../../../styles'

export default function CardsComponents() {
  return (
    <>
    <Boxes>
      <Card heading='Rozliczenia' text='Rozliczenia podatkowe w Polsce, Holandii, Niemczech i Belgii' price='40' link='/services/taxes'/>
      <Card heading='Administracja' text='Administracja jednoosobowych działalności gospodarczych i firm VOF' price='100' link='/services/administration'/>
    </Boxes>
    <Boxes>
      <Card heading='Dofinansowania' text='Dofinansowania do ubezpieczenia, mieszkania, żłobka i inne' price='40' link='/services/subsidies'/>
      <Card heading='Zasiłki' text='Zasiłek rodzinny, macierzyński, chorobowy, dla bezrobotnych i inne' price='50' link='/services/benefits'/>
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
