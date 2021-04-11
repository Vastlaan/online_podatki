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
    <FlexCol padding='1.4rem 0' margin='1.4rem' background='#fff'>
      <Heading3 padding='0 1.4rem'>{heading}</Heading3>
      
      <Price>&euro;{price},-/ maand</Price>
      <Text padding='1.4rem'>{text}</Text>

      <ButtonSecondary wide='100%'>Bekijk dit pakket <IoIosArrowRoundForward /></ButtonSecondary>
    </FlexCol>
  )
}

const Price = styled.div`
  width: 100%;
  padding: .9rem 1.4rem;
  background-color: ${p=>p.theme.grey4};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  font-family: ${fonts.heading};
  font-weight: 300;
  line-height: 1.3;
  color: ${p=>p.theme.white};
`