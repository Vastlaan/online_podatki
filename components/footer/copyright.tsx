import styled from "styled-components";
import { fonts } from "../../styles";

export default function CopyrightComponent() {
    return (
        <Copyright>
            <p>
                &copy;{new Date().getFullYear()} Deze website is aangemaakt door{" "}
                <a href="https://itcontext.nl">IT Context</a>. Alle rechten
                voorbehouden.
            </p>
        </Copyright>
    );
}
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: center;
    flex-wrap: wrap;
    width: 100%;
    p {
        font-size: 1.6rem;
        font-family: ${fonts.heading};
        color: ${(p) => p.theme.grey1};
        text-align: center;
    }
    a {
        color: ${(p) => p.theme.secondary};
        transition: all 0.3s;
        &:hover {
            color: ${(p) => p.theme.primary};
        }
    }
`;