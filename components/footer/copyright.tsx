import styled from "styled-components";
import {fonts} from '../../styles'
import {data} from '../../translations/pl/footer/copyright'

export default function CopyrightComponent() {
    return (
        <Copyright>
            <p>
                &copy; {new Date().getFullYear()} Copyright{" "}
                <a href="https://itcontext.nl">IT Context</a> {data.copyright}
            </p>
        </Copyright>
    );
}
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    widht: 100%;
    padding-bottom: 1.9rem;
    p {
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        font-family: ${fonts.heading};
        color: ${(p) => p.theme.white};
        a {
            padding: .6rem .9rem;
            background-color: ${p=>p.theme.secondary};
            color: ${p=>p.theme.white};
            display: inline-block;
            transition: all .3s;
            box-shadow: 0 .3rem .5rem rgba(0,0,0,.3);

            &:hover{
                transform: rotate(4deg) scale(1.05);
            }
        }
    }
`;