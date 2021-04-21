import Link from "next/link";
import {useRouter} from 'next/router'
import styled from "styled-components";
import { respond, fonts, Heading6, Anchor, Line } from "../../styles";
import {BsChevronRight} from 'react-icons/bs'
import {MdEmail, MdPhone} from 'react-icons/md'
import {RiMapPinFill} from 'react-icons/ri'
import en from '../../translations/en/footer'
import pl from '../../translations/pl/footer'

interface LinksProps{
    data: {header?: string; links: {name?: string; url?: string}}[];
}

export default function LinksComponent() {

    const router = useRouter()
    const {locale } = router
    const translations = locale==='en'?en:pl

    return (
        <Links>
            {translations.sections.map((section, i) => {
                return (
                    <Items key={`${section}-${i}}`}>
                        <Heading6 align='left' color='white'  margin='0 0 1.4rem 0'>{section.header}</Heading6>

                        {section.links.map((link, i) => {
                            return (
                                <Link
                                    key={`${link.name}-${i}}`}
                                    href={`${link.url}`}
                                >
                                    <Item> <BsChevronRight/>{link.name}</Item>
                                </Link>
                            );
                        })}
                    </Items>
                );
            })}
            <Items>
                <Heading6 align='left' color='white' margin='0 0 1.4rem 0'>{locale==='en'?"Contact":"Kontakt"}</Heading6>

                <Item>
                    <RiMapPinFill/>
                    Lakenblekerstraat 24, 1431GG Aalsmeer
                </Item>
                
                <Anchor href="tel:0031630159193">
                    <Item>
                        <MdPhone/>
                        +31 630 159 193
                    </Item>
                </Anchor>
                <Anchor href="tel:0031630159193">
                    <Item>
                        <MdPhone/>
                        +48 500 424 583
                    </Item>
                </Anchor>
                
                <Anchor href="mailto:info@onlinepodatki.eu">
                    <Item>
                        <MdEmail/>
                        info@onlinepodatki.eu
                    </Item>
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
            "padding: 0 1.4rem; flex-direction: row; justify-content: space-between;"
        )}
`;
const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.4rem;
    
    ${() => respond("m", "margin: 2.7rem 0; min-width: 25rem;")}
`;

const Item = styled.li`
    font-size: 1.6rem;
    color: ${p=>p.theme.white};
    transition: all .3s;
    display: flex;
    align-items: center;
    margin:  0;
    padding: .9rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,.3);

    &:hover{
        svg{
            transform: translateX(.5rem);
        }    
    }

    svg{
      font-size: 2.2rem;
      color: ${p=>p.theme.white};
      margin-right: .9rem;
      transition: all .3s;
    }
`

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