import styled from 'styled-components'
import {fonts, FlexCol, Heading3, Text, ButtonSecondary} from '../../styles'
import {IoIosArrowRoundForward} from 'react-icons/io'


interface CardProps{
  heading: string;
  price: string;
  text: string;
}

export default function CardComponent({heading, price, text}:CardProps) {
  return (
    <Card>
      <Heading3 padding='1.4rem'>{heading}</Heading3>
      
      <Price><sub>od</sub>&nbsp; <p>&euro;{price}</p>&nbsp; <sup> brutto</sup></Price>
      <Text padding='1.4rem'>{text}</Text>

      <ButtonSecondary wide='100%'>Więcej <IoIosArrowRoundForward /></ButtonSecondary>
    </Card>
  )
}

const Card = styled.div`
  width: 30rem;
  padding: 2.7rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1.4rem;
  background-color: white;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
`

const Price = styled.div`
  width: 100%;
  padding: .9rem 1.4rem;
  background-color: ${p=>p.theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 3.7rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }

  sub{
    display: inline-block;
    transform: translateY(-1rem);
    font-size: 1.2rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }
  sup{
    display: inline-block;
    transform: translateY(1rem);
    font-size: 1.2rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    line-height: 1.3;
    color: ${p=>p.theme.white};
  }
  
`