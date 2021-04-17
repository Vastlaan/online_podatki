import styled from 'styled-components'
import Intersection from '../intersection'
import Details from '../contact_page/details'
import { SectionNarrow, FlexCol, Heading1, Text, List} from '../../styles'
import {GiCheckMark} from 'react-icons/gi'
import {IoIosContacts} from 'react-icons/io'

interface ServiceProps{
  title?: string;
  body?: string;
  imageUrl: string;
  features?: string[]
}
interface ImageBoxProps{
  imageUrl: string;
}

export default function ServiceComponent({title, body, imageUrl, features}:ServiceProps) {
  return (
    <SectionNarrow>
      <FlexCol align='flex-start' margin='0 0 2.7rem 0'>
        <ImageBox imageUrl={imageUrl}>
         
        </ImageBox>
        <FlexCol align='flex-start'>
          
          <Heading1 align='left' wide='100%' margin='1.4rem 0'>{title}</Heading1>
          <Text align='left' wide='100%' margin='1.4rem 0'>{body}</Text>
          <List>
            {features.map((item,i)=>{
              return(
                <Item key={i}>
                  <GiCheckMark/>
                  {item}
                </Item>
              )
            })}
          </List>
        </FlexCol>
      </FlexCol>

      <Intersection

        category=''
        title='Umów się na spotkanie!'
        body='Nawiąż kontakt z jednym z naszych pracowników.'
        margin='0 auto 0 auto'
        icon={<IoIosContacts/>}
      />

      <Details/>

    </SectionNarrow>
    
  )
}

const ImageBox = styled.div<ImageBoxProps>`
  width: 100%;
  min-height: 30rem;
  max-height: 50rem;
  background-image: linear-gradient(to bottom, rgba(70, 141, 204, 0), rgba(70, 141, 204, 0)), url(${p=>p.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Item = styled.li`

  margin: 1.4rem 0;
  font-size: 1.9rem;
  color: ${p=>p.theme.grey3};
  display: flex;
  align-items: center;

  svg{
    font-size: 2.2rem;
    color: ${p=>p.theme.secondary};
    margin-right: .9rem;
  }

`