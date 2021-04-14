import Link from "next/link";
import styled from "styled-components";
import { respond, fonts, Heading6, Item, Anchor, Line } from "../../styles";
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
                    <Items key={`${section}-${i}}`}>
                        <Heading6 align='center' color='white'  margin='0 0 1.4rem 0'>{section.header}</Heading6>

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
                <Heading6 align='center' color='white' margin='0 0 1.4rem 0'>Kontakt</Heading6>
                <Field>Online <span>Podatki</span></Field>
                <Field>Lakenblekerstraat 24D</Field>
                <Field>1431GG Aalsmeer</Field>
                <Anchor margin='.3rem 0 .3rem 0' href="tel:0031630159193">
                    <MdPhone/>
                    <Field>+31 630 159 193</Field>
                </Anchor>
                <Anchor margin='.3rem 0 .3rem 0' href="tel:0048500424583">
                    <MdPhone/>
                    <Field>+48 500 424 583</Field>
                </Anchor>
                <Anchor margin='.3rem 0 .3rem 0' href="mailto:info@onlinepodatki.eu">
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
            "padding: 2.7rem; flex-direction: row; justify-content: space-between;"
        )}
`;
const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.4rem;
    padding: 1.4rem;
    min-width: 25rem;
    ${() => respond("m", "margin: 2.7rem 0;border-right: 1px solid rgba(0,0,0,.15);")}
`;

const Field = styled.p`
    margin: .6rem 0;
    display: inline-block;
    font-size: 1.9rem;
    font-weight: 300;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.white};

    ${()=>respond('m','margin: .3rem 0;')}

    span{
        color:${p=>p.theme.secondaryLight};
        font-weight: 600;
    }
`