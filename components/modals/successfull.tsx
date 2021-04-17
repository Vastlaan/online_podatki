import { useRef, useEffect } from "react";
import {useRouter} from 'next/router'
import gsap from "gsap";
import styled from "styled-components";
import { respond, Heading6, FlexRow, ButtonSecondary } from "../../styles";

export default function ModalSuccessful({ message }) {

    const router = useRouter()

    useEffect(() => {
        gsap.to(modal.current, { autoAlpha: 1, scale: 1, duration: 0.3 });
    });

    const modal = useRef();


    return (
        <Modal ref={modal}>
            <BoxMessage>
                <Heading6 color='black' align="center">{message}</Heading6>
                <FlexRow>
                    <ButtonSecondary
                        onClick={() => {
                            router.push('/')
                        }}
                    >
                        Powrót do strony głównej
                    </ButtonSecondary>
                </FlexRow>
            </BoxMessage>
        </Modal>
    );
}
const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.3);
    padding: 1.4rem;
    button {
        margin: 1.4rem;
    }
`;

const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.7rem 1.4rem;
    border: 1px solid ${(p) => p.theme.primary};
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 1rem ${(p) => p.theme.primary};
    ${() => respond("s", "padding: 4.7rem 2.7rem;")}
`;