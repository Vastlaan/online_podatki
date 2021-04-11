import styled from 'styled-components'
import Card from '../../card'
import {respond} from '../../../styles'

export default function CardsComponents() {
  return (
    <Boxes>
      <Card heading='Basic' text='Maandelijks opzegbaar' price='25'/>
      <Card heading='Breed' text='Maandelijks opzegbaar' price='55'/>
      <Card heading='Professional' text='Maandelijks opzegbaar' price='75'/>
      <Card heading='Advanced' text='Maandelijks opzegbaar' price='95'/>
    </Boxes>
  )
}

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${()=>respond('m','flex-direction: row')}
`
