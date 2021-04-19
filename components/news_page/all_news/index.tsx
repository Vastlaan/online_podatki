import Link from "next/link";
import Image from 'next/image'
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    FlexCol,
    FlexRow,
    Heading4,
    Text,
    ButtonSecondary,
} from "../../../styles";

export default function AllNewsComponent({ data }) {

    return (
        <SectionNarrow>
            <FlexCol>
                {data.map((article) => {

                    return (
                        <Container key={article.id}>
                            <Link href={`/news/${article.id}`}>
                            <Main key={article.id}>
                                <Heading4 margin='1.4rem 0 1.4rem 1.4rem' align='left'>{article.title}</Heading4>
                                <ImageContainer>
                                <Image src={`https://api.itcontext.nl${article.image.url}`} alt="article" layout='fill' objectFit='cover'/>
                                </ImageContainer>
                                <FlexRow>
                                {article.online_podatki_categories.map((cat) => {
                                    return (
                                        <small key={`category-${cat.id}`}>
                                            #{cat.name}
                                        </small>
                                    );
                                })}
                                </FlexRow>
                                
                                <Line/>
                                <Text align='left' wide='65rem' margin='1.4rem 0'>{article.content.substring(0, 200) + " ..."}</Text>
                                <Link
                                    href={`/news/${article.id}`}
                                >
                                    <ButtonSecondary>Czytaj</ButtonSecondary>
                                </Link>
                            </Main>
                            </Link>

                        </Container>
                    );
                })}
            </FlexCol>
        </SectionNarrow>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  margin: 2.7rem;
  ${()=>respond('m','flex-direction: row; justify-content: center; max-width: 65rem;')}
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  width: 100%;
  min-height: 20rem;
  transition: all .3s;
  margin-bottom: 2.7rem;

  ${()=>respond('m','width: 65rem;')}
`
const Line = styled.div`
  margin: 1.4rem 0;
  width: 30%;
  height: 2px;
  background-color: ${p=>p.theme.grey3};
  transition: all .3s;
`

const Main = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  cursor: pointer;

  small{
    font-size: 1.2rem;
    font-style: italic;
    margin-right: .6rem;

  }
  &:hover{
    ${ImageContainer}{
      box-shadow: 0 0 2rem rgba(0,0,0,.6);
    }
    ${Line}{
      width: 100%;
    }
  }
`