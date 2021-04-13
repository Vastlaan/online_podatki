import Link from "next/link";
import styled from "styled-components";
import { respond, fonts, Heading6, Item, Anchor } from "../../styles";
import {BsChevronRight} from 'react-icons/bs'
import { data } from "../../translations/pl/footer/sections";
import {MdEmail, MdPhone} from 'react-icons/md'

interface LinksProps{
    data: {header?: string; links: {name?: string; url?: string}}[];
}

export default function LinksComponent() {
    return (
        <Links>
            {data.map((section, i) => {
                return (
                    <Items key={`${section}}`}>
                        <Heading6 align='center' color='white'>{section.header}</Heading6>
                        {section.links.map((link, i) => {
                            return (
                                <Link
                                    key={`${link.name}-${i}}`}
                                    href={`${link.url}`}
                                >
                                    <Item color='white' margin='.9rem 0'> <BsChevronRight/>{link.name}</Item>
                                </Link>
                            );
                        })}
                    </Items>
                );
            })}
            <Items>
                <Heading6 align='center' color='white' margin='0 0 .9rem 0'>Kontakt</Heading6>
                <Field>Online <span>Podatki</span></Field>
                <Field>Lakenblekerstraat 24D</Field>
                <Field>1431GG Aalsmeer</Field>
                <Anchor href="tel:0031630159193">
                    <MdPhone/>
                    <Field>+31 630 159 193</Field>
                </Anchor>
                <Anchor href="tel:0048500424583">
                    <MdPhone/>
                    <Field>+48 500 424 583</Field>
                </Anchor>
                <Anchor href="mailto:info@onlinepodatki.eu">
                    <MdEmail/>
                    <Field>info@onlinepodatki.eu</Field>
                </Anchor>
            </Items>
        </Links>
    );
}
const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 1.4rem;
    ${() =>
        respond(
            "m",
            "padding: 2.7rem; flex-direction: row; justify-content: flex-start;"
        )}
`;
const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.4rem;
    padding: 1.4rem;
    min-width: 25rem;
    ${() => respond("m", "margin: 2.7rem;border-right: 1px solid rgba(0,0,0,.15);")}
`;

const Field = styled.p`
    display: inline-block;
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.white};

    span{
        color:${p=>p.theme.secondaryLight};
        font-weight: 600;
    }
`