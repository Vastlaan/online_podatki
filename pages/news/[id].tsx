import Link from "next/link";
import {useEffect, useState} from 'react'
import Head from '../../components/seo'
import styled from "styled-components";
import marked from "marked";
import DOMPurify from 'dompurify'
import Header from '../../components/header/article_header'
import Layout from "../../layouts/main";
import { respond, SectionNarrow, Line, Heading1 } from "../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

interface ImageBoxProps{
  imageUrl: string;
}

export default function ArticleComponent({ data }) {
    const { id, title, content, date, online_podatki_categories, time, image } = data;

    const [markup, setMarkup] = useState({__html: ''})

    useEffect(()=>{
        function getMarkdownText(c) {


            const domPurify = DOMPurify(window)
            const rawMarkup = domPurify.sanitize(marked(c));
            return { __html: rawMarkup };
        }
        const markup = getMarkdownText(content);
        setMarkup(markup)
    },[])

    

    return (
        <Layout>
            <Head title={title} />
            <Header  title={title} imageUrl={image?`https://api.itcontext.nl${image.url}`:undefined} />
            <SectionNarrow>
                
                <Article key={id}>
                    
                    <Heading1 color='#0b141e'>{title}</Heading1>

                    <Line margin='1.4rem 0' color='black' wide='100%'/>
                    <Info>
                        <Date>
                            <IoMdTimer />
                            {date}
                        </Date>
                        <Read>
                            <AiOutlineRead />
                            <span>{time}</span>
                        </Read>
                        <Tags>
                            <span>tagi:</span>
                            {online_podatki_categories.map((cat) => {
                                return (
                                    <span key={`category-${cat.id}`}>
                                        #{cat.name}
                                    </span>
                                );
                            })}
                        </Tags>
                    </Info>
                    <Line margin='1.4rem 0' color='black' wide='100%'/>
                    {image && <ImageBox imageUrl={`https://api.itcontext.nl${image.url}`}/>}
                    
                    
                    <Core dangerouslySetInnerHTML={markup} />
                </Article>
            </SectionNarrow>
        </Layout>
    );
}
export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://api.itcontext.nl/online-podatki-articles?id=${id}`);
    const json = await res.json();
    const data = json[0];

    return {
        props: { data },
    };
}

const ImageBox = styled.div<ImageBoxProps>`
  width: 100%;
  min-height: 30rem;
  max-height: 50rem;
  background-image: linear-gradient(to bottom, rgba(70, 141, 204, 0.3), rgba(70, 141, 204, 0.3)), url(${p=>p.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Article = styled.article`
    width: 100%;
    margin: 1.4rem 0;
    background-color: ${(p) => p.theme.white};
    ${() => respond("m", "width: 90%;")}
`;
const Info = styled.div`
    padding: 0 1.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > * {
        margin: 0 2rem 0.5rem 0;
    }
    ${() =>
        respond(
            "m",
            "flex-direction: row; flex-wrap: wrap; align-items: center;"
        )}
`;
const Read = styled.div`
    display: flex;
    align-items: center;
    svg {
        font-size:1.9rem;
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }
    span {
        font-size: 1.6rem;
        color: ${(p) => p.theme.grey};
    }
`;
const Date = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: ${(p) => p.theme.grey};
    svg {
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }
`;
const Tags = styled.div`
    flex: 1;
    text-align: right;
    span {
        font-size: 1.4rem;
        margin-right: 1rem;
        color: ${(p) => p.theme.grey};
    }
`;
const Core = styled.div`

    padding: 1.4rem 0;
    ol, ul {
        list-style: none;
        padding-left: 1.4rem;
        margin: 1.4rem 0;
        li {
            font-weight: 500;
        }
    }
    p,
    li {
        font-size: 1.8rem;
        margin: 1.4rem 0;
    }
    pre {
        margin: 2rem auto;
        white-space: break-spaces;
        word-break: break-word;
        padding: 1rem;
        background-color: ${(p) => p.theme.black};
    }
    code {
        font-size: 1.6rem;
        color: gold;
        font-family: "Courier New", sans-serif;
    }
`;