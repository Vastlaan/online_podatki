import styled from "styled-components";
import Links from "./links";
import Copyright from "./copyright";
import { respond, ContainerNarrow, FlexRow } from "../../styles";

export default function FooterComponent() {
    return (
        <Footer>
            <ContainerNarrow>
                <Links/>
                <Copyright />
            </ContainerNarrow>
        </Footer>
    );
}

const Footer = styled.footer`
    padding: 2.7rem 0;
    background-color: ${(p) => p.theme.primaryDark};
    ${() => respond("l", "padding: 0.7rem; padding-bottom: 0;")}
`;
const Logo = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: .9rem;
  position: relative;
  width: 22rem;
  height: 8rem;
  z-index: 99;
  cursor: pointer;
`