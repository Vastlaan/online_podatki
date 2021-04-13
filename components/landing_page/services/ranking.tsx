import styled from 'styled-components'
import {BsFillStarFill} from 'react-icons/bs'
import {respond, fonts} from '../../../styles'

export default function RankingComponent() {
  return (
    <Ranking>
      <div>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
        <BsFillStarFill/>
      </div>
      <p>positief beoordeeld door 91% klanten</p>
    </Ranking>
  )
}

const Ranking = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 40rem;

  ${()=>respond('s','flex-direction: row; align-items: center;justify-content: space-between;')}
  div{
    width: 18rem;
    svg{
      margin: .2rem;
      width: 3rem;
      height: 3rem;
      color: ${p=>p.theme.secondary};
    }
  }
  p{
    max-width: 20rem;
    font-family: ${fonts.heading};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.4;
    color: ${p=>p.theme.grey4};
    text-align: center;

    ${()=>respond('s','text-align: left;')}
  }
`
