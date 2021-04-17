import Link from "next/link";
import styled from "styled-components";
import marked from "marked";
import {
    respond,
    fonts,
    SectionNarrow,
    FlexCol,
    ButtonPrimary,
} from "../../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

export default function AllNewsComponent({ data }) {

    return (
        <SectionNarrow>
            <FlexCol>
                {data.map((article) => {
                    function getMarkdownText() {
                        let rawMarkup = marked(article.content);
                        rawMarkup = rawMarkup.substring(0, 200) + " ...";
                        return { __html: rawMarkup };
                    }

                    const content = marked(article.content);

                    return (
                        <Article key={article.id}>
                            <Headline>
                                <AiOutlineRead />
                                <span>{article.title}</span>
                            </Headline>
                            <Date>
                                <IoMdTimer />
                                {article.date}
                            </Date>
                            <Core dangerouslySetInnerHTML={getMarkdownText()} />
                            <Link
                                href={`/news/${article.id}`}
                            >
                                <ButtonPrimary>Czytaj</ButtonPrimary>
                            </Link>
                            <Tags>
                                {article.online_podatki_category.name}
                                {article.online_podatki_categories.map((cat) => {
                                    return (
                                        <span key={`category-${cat.id}`}>
                                            #{cat.name}
                                        </span>
                                    );
                                })}
                            </Tags>
                        </Article>
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
    font-size: 2.5rem;
    font-weight: 800;
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
        font-size: 2.2rem;
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
