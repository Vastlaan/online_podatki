import Link from "next/link";
import Image from 'next/image'
import styled from "styled-components";
import marked from "marked";
import {
    respond,
    fonts,
    SectionNarrow,
    FlexCol,
    FlexRow,
    Heading4,
    Text,
    ButtonSecondary,
} from "../../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

export default function AllNewsComponent({ data }) {

    return (
        <SectionNarrow>
            <FlexCol>
                {data.map((article) => {
                    function getMarkdownText(text) {
                        let rawMarkup = marked(text);
                        rawMarkup = rawMarkup.substring(0, 200) + " ...";
                        return { __html: rawMarkup };
                    }

                    const content = marked(article.content).substring(0, 200) + " ...";

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
                        // <Article key={article.id}>
                        //     <Headline>
                        //         <AiOutlineRead />
                        //         <span>{article.title}</span>
                        //     </Headline>
                            
                        //     <Date>
                        //         <IoMdTimer />
                        //         {article.date}
                        //     </Date>
                        //     <Core dangerouslySetInnerHTML={getMarkdownText()} />
                        //     <Link
                        //         href={`/news/${article.id}`}
                        //     >
                        //         <ButtonSecondary>Czytaj</ButtonSecondary>
                        //     </Link>
                        //     <Tags>
                                
                        //         {article.online_podatki_categories.map((cat) => {
                        //             return (
                        //                 <span key={`category-${cat.id}`}>
                        //                     #{cat.name}
                        //                 </span>
                        //             );
                        //         })}
                        //     </Tags>
                        // </Article>
                    );
                })}
            </FlexCol>
        </SectionNarrow>
    );
}
const Article = styled.div`
    width: 100%;
    margin: 4.7rem auto;
    background-color: ${(p) => p.theme.white};
    box-shadow: 0 0 2rem rgba(0,0,0,.6);
    button {
        margin-left: 2rem;
    }
    ${()=>respond('m','width:90%;')}
`;
const Headline = styled.h3`
    padding: 1rem 2rem;
    font-size: 2.2rem;
    font-weight: 600;
    background-color: ${(p) => p.theme.primaryDark};
    color: ${(p) => p.theme.white};
    display: flex;
    align-items: center;
    svg {
        display: none;
        margin-right: 1rem;
        color: ${(p) => p.theme.grey2};

        ${()=>respond('m','display: inline-block;')}
    }
`;
const Date = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${(p) => p.theme.black};
    svg {
        color: ${(p) => p.theme.primaryDark};
        margin-right: 1rem;
    }
`;
const Core = styled.div`
    margin: 0 auto;
    padding: 2rem;
    ol {
        padding-left: 2rem;
        li {
            font-weight: 700;
        }
    }
    p,
    li {
        font-size: 1.8rem;
        font-family: ${fonts.para};
    }
    pre {
        margin: 2rem auto;
        white-space: break-spaces;
        padding: 1rem;
        background-color: ${(p) => p.theme.grey4};
    }
    code {
        font-size: 1.6rem;
        color: gold;
    }
`;

const Tags = styled.div`
    width: 100%;
    background-color: ${(p) => p.theme.secondary};
    padding: 1rem 2rem;
    margin-top: 2rem;
    span {
        font-size: 1.4rem;
        margin-right: 1rem;
        color: ${(p) => p.theme.white};
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 65rem;
  margin: 2.7rem;
  ${()=>respond('m','flex-direction: row; justify-content: center;')}
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  width: 65rem;
  min-height: 20rem;
  transition: all .3s;
  margin-bottom: 2.7rem;
`
const Social = styled.div`
  display: flex;
  justify-content: center;
  a{
    color: ${p=>p.theme.grey2};
    &:hover{
      color: blue;
    }
    svg{
      font-size: 1.9rem;
      margin-right: 1.4rem;
    }
  }
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