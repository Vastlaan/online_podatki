import styled from "styled-components";
import Links from "./links";
import Copyright from "./copyright";
import { FlexRow, Company } from "../../styles";

export default function FooterComponent() {
    return (
        <Footer>
            <FlexRow justify='space-between'>
                <Logo>
                    <img src="/img/logo.svg" alt="logo"/>
                </Logo>
                <Company color="white" margin='0 auto 0 0'><span>B</span>oekhoud</Company>
            </FlexRow>

            <Links />

            <Copyright />
        </Footer>
    );
}

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(p) => p.theme.primary};
    padding: 2.7rem 1.4rem;
`;
const Logo = styled.div`
  display: flex;
  aling-items: center;
`
