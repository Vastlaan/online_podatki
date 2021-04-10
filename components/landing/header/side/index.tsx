import styled from 'styled-components'
import Image from 'next/image'
import {respond, ButtonEmpty, ButtonEmptyReverse, Heading3, Text, FlexCol, Line,} from '../../../../styles'
import { IoMdCall, IoIosMail } from "react-icons/io";

export default function SideComponent() {
  return (
    <Side>
      <FlexCol>

        <Heading3>
          Contact
        </Heading3>

        <Text>
          Wanneer mag ik u helpen?
        </Text>

        <ImageContainer>
          <Image 
            src='/img/myself.jpg'
            alt='chief executive officer'
            layout='fill'
          />
        </ImageContainer>

        <Line/>

        <Text margin='1.4rem auto'>Bel mij op:</Text>

        <ButtonEmpty >
          <IoMdCall/>
          06 82 30 70 51
        </ButtonEmpty>

        <Text margin='1.4rem auto'>Stuur een e-mail:</Text>

        <ButtonEmptyReverse >
          <IoIosMail/>
          info@itcontext.nl
        </ButtonEmptyReverse>

      </FlexCol>
    </Side>
    
  )
}

const Side = styled.aside`
  
  padding: 0 1.4rem;

  ${(p)=>respond('s',`border-left: 1px solid ${p.theme.grey2};`)}
`
const ImageContainer = styled.div`
  margin: 2.7rem auto;
  position: relative;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.6);
`


