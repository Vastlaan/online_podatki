import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import Link from 'next/link'
import Navigation from './navigation'
import {useRouter} from 'next/router'
import {BsChevronRight} from 'react-icons/bs'
import { Header, ContainerNarrow, Company, HeadingHuge, Text, FlexCol, Line, Item } from "../../styles";

interface HeaderProps{
  title?: string;
  body?: string;
  imageUrl?: string;
}

export default function HeaderComponent({ title, body, imageUrl }:HeaderProps) {

    const target = useRef()

    const router = useRouter()

    const pathArray = router.asPath.split('/')

    useEffect(()=>{
        
        gsap.to(target.current, {autoAlpha: 1, duration: .6})
    },[])

    return (
        <Header minHeight="45vh" url={imageUrl ? imageUrl : undefined} ref={target}>
            <ContainerNarrow>

                <FlexCol margin='0 2.7rem'>
                    
                    <Navigation/>

                    <FlexCol margin="2.7rem auto">
                        <HeadingHuge color='white'>
                            {title
                            .split(" ")
                            .map((word, i) =>
                                i === 1 ? <span key={i}>{word} </span> : word + " "
                            )}
                        </HeadingHuge>
                    </FlexCol>
                    
                    <Text color='white' wide='55rem'>{body}</Text>
                </FlexCol>
                
            </ContainerNarrow>
            
        </Header>
    );
}
const Navigatie = styled.div`
    align-self: flex-start;
    display: flex;
`
const Path = styled.p`
    font-size: 1.6rem;
    color: white;
    transition: all .3s;
    text-decoration: underline;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin: .9rem 0;
    cursor: pointer;

    &:hover{
      color: ${p=>p.theme.secondaryLight};
    }

    svg{
      font-size: 2.2rem;
      color: ${p=>p.theme.secondaryLight};
      margin-right: .4rem;
    }
`