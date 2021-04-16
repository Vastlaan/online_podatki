import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import Image from 'next/image'
import Navigation from './navigation'
import {useRouter} from 'next/router'
import { Header, ContainerNarrow, HeadingHuge, Text, FlexCol } from "../../styles";

interface HeaderProps{
  title?: string;
  body?: string;
  imageUrl?: string;
}

export default function HeaderComponent({ title, body, imageUrl }:HeaderProps) {

    console.log(imageUrl)

    const target = useRef()

    const router = useRouter()

    const pathArray = router.asPath.split('/')

    useEffect(()=>{
        
        gsap.to(target.current, {autoAlpha: 1, duration: .6})
    },[])

    return (
        <Header minHeight="45vh" url={undefined} ref={target}>
            <BackgroundImage>
              {imageUrl?(<Image src={imageUrl} alt={title} layout='fill'/>):(<Image src='/img/header-1.jpg' alt={title} layout='fill'/>)}
              
            </BackgroundImage>
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

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom: 0;
  z-index: -1;

`