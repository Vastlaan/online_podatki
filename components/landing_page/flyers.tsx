import styled from 'styled-components'
import Flyer from '../flyer'
import {respond, SectionNarrow, FlexCol, Heading1} from '../../styles'
import {IoMdTimer} from 'react-icons/io'
import {IoRocketOutline} from 'react-icons/io5'
import {AiOutlineBarChart} from 'react-icons/ai'

export default function BoxesComopnent({data}) {
  return (
    <SectionNarrow margin='-2.7rem auto 4.7rem auto'>
      <FlexCol>
        {/* <Heading1 align='center' margin='0 auto'>Wyjątkowo u nas</Heading1> */}
        <Boxes>

          {data.map((article, i)=>{

            if(i<3){
              return(
                <Flyer 
                  key={i}
                  animation="mx"
                  article={article}
                />
              )
            }
          })}
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
