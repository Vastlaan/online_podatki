import Link from "next/link";
import styled from "styled-components";
import { fonts } from "../../styles";
import {FlexibleComponentProps} from '../../types'

export default function LinksComponent() {
    return (
        <Links>
            <Link href="/afspraak">
                <ListLink margin="1.4rem">Administartie</ListLink>
            </Link>
            <Link href="/behandelingen">
                <ListLink margin="1.4rem">Financiëlen</ListLink>
            </Link>
            <Link href="/contact">
                <ListLink margin="1.4rem">Tariven</ListLink>
            </Link>
            <Link href="/cookies">
                <ListLink margin="1.4rem">Cookies</ListLink>
            </Link>
        </Links>
    );
}

const Links = styled.ul`
    list-style: none;
    margin: 2.7rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    aling-itmes: center;
`;
const ListLink = styled.li<FlexibleComponentProps>`
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    letter-spacing: 0.15rem;
    color: ${(p) => (p.color ? p.color : p.theme.white)};
    margin: ${(p) => (p.margin ? p.margin : "0")};
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: ${(p) => p.theme.grey1};
    }
`;
