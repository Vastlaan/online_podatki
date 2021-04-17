import Link from "next/link";
import Head from '../../components/seo'
import styled from "styled-components";
import marked from "marked";
import Header from '../../components/header/article_header'
import Layout from "../../layouts/main";
import { respond, SectionNarrow, Line } from "../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

interface ImageBoxProps{
  imageUrl: string;
}

export default function ArticleComponent({ data }) {
    const { id, title, content, date, online_podatki_categories, time, image } = data;

    function getMarkdownText(c) {
        var rawMarkup = marked(c, { sanitize: true });
        return { __html: rawMarkup };
    }
    const markup = getMarkdownText(content);

    return (
        <Layout>
            <Head title={title} />
            <Header title={title} imageUrl={image?`https://api.itcontext.nl${image.url}`:'none'}/>
            <SectionNarrow>
                
                <Article key={id}>
                    <Headline>
                        <h3>{title}</h3>
                    </Headline>
                    {image && <ImageBox imageUrl={`https://api.itcontext.nl${image.url}`}/>}
                    <Line margin='1.4rem 0' color='black' wide='100%'/>
                    <Info>
                        <Date>
                            <IoMdTimer />
                            {date}
                        </Date>
                        <Read>
                            <AiOutlineRead />
                            <span>read time {time}</span>
                        </Read>
                        <Tags>
                            <span>tags:</span>
                            {online_podatki_categories.map((cat) => {
                                return (
                                    <span key={`category-${cat.id}`}>
                                        #{cat.name}
                                    </span>
                                );
                            })}
                        </Tags>
                    </Info>
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
const Article = styled.div`
    width: 100%;
    margin: 5rem auto;
    background-color: ${(p) => p.theme.white};
    ${() => respond("m", "width: 90%;")}
`;
const Headline = styled.div`
    margin: 1rem 0;
    padding: 0rem 2rem;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid ${(p) => p.theme.black};
    h3 {
        font-size: 5rem;
        font-weight: 800;
        color: ${(p) => p.theme.black};
        text-align: left;
        ${() => respond("m", "text-align: left;font-size: 6rem;")}
    }
`;
const Info = styled.div`
    padding: 0 2rem;
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
        font-size: 2rem;
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }
    span {
        font-size: 2rem;
        color: ${(p) => p.theme.grey};
    }
`;
const Date = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
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
    margin: 0rem auto;
    padding: 2rem;
    ol {
        padding-left: 2rem;
        margin: 1.4rem 0;
        li {
            font-weight: 700;
        }
    }
    p,
    li {
        font-size: 2.25rem;
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