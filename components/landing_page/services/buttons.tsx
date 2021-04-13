import styled from 'styled-components'
import {ButtonPrimary, ButtonSecondary} from '../../../styles'

export default function ButtonsComponent() {
  return (
    <Buttons>
      <ButtonPrimary >Offerte</ButtonPrimary>
      <ButtonSecondary>Contact</ButtonSecondary>
    </Buttons>
  )
}
const Buttons = styled.div`
  margin: 4.7rem 0;
  width: 27rem;
  display: flex;
  justify-content: space-between;
`