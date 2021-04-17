import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import gsap from "gsap";
import { fonts} from "../../styles";
import {ThemeProps,FlexibleComponentProps} from '../../types'

export default function CookieStatementComponent() {
    const target = useRef();

    function hideStatement() {
        window.localStorage.setItem("onlinepodatkicookiesagree", JSON.stringify({cookies_accepted: true}));
        gsap.to(target.current, { autoAlpha: 0, y: "100%" });
    }

    useEffect(() => {
        const isAgreed = JSON.parse(window.localStorage.getItem(
            "onlinepodatkicookiesagree"
        ));

        if (!isAgreed) {
            gsap.to(target.current, { autoAlpha: 1, y: 0, duration: 0.3 });
        }
    });

    return (
        <CookiesStatement ref={target}>
            <CustomText>
                Uprzejmie informujemy, że w ramach naszej witryny używamy{" "}
                <Link href="/cookies">
                    <span>plików cookies</span>
                </Link>{" "}
                w celu świadczenia usług na najwyższym poziomie oraz w sposób dostosowany do Twoich indywidualnych preferencji. 
                Korzystanie z witryny bez zmiany ustawień oznacza, że akceptujesz otrzymywanie plików cookies. 
                Zmiany ustawień dla plików cookies możesz dokonać w każdym momencie użytkowania serwisu.
            </CustomText>
            <ButtonSmall
                margin=".9rem 1.4rem"
                onClick={hideStatement}
            >
                Zgoda
            </ButtonSmall>
        </CookiesStatement>
    );
}

const CookiesStatement = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.4rem 2.7rem;
    background-color: ${(p: ThemeProps) => p.theme.white};
    transform: translateY(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    visibility: hidden;
    opacity: 0;
    border: 3px solid ${(p: ThemeProps) => p.theme.primary};
`;

const CustomText = styled.p`
    margin: ${(p: FlexibleComponentProps) => (p.margin ? p.margin : "0")};
    font-size: 1.4rem;
    font-family: ${fonts.heading};
    font-weight: 300;
    color: ${(p: ThemeProps) => (p.color ? p.color : p.theme.grey3)};
    line-height: 1.3;
    letter-spacing: 0.15rem;
    text-align: ${(p: FlexibleComponentProps) => (p.align ? p.align : "center")};

    span {
        text-decoration: underline;
        color: ${(p: ThemeProps) => p.theme.primary};
        cursor: pointer;
    }
`;

const ButtonSmall = styled.button<FlexibleComponentProps>`
    margin: ${(p:FlexibleComponentProps)=>p.margin?p.margin: '1.4rem'});
    padding: 0.6rem 0.9rem;
    background-color: ${p=>p.theme.primary};
    border: 1px solid ${p=>p.theme.primary};
    font-family: ${fonts.heading};
    font-weight: 300;
    color: ${(p:ThemeProps) => (p.color ? p.color : p.theme.grey1)};
    letter-spacing: 0.15rem;
`;