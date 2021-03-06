import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import Navigation from './navigation'
import {useRouter} from 'next/router'
import { Header, ContainerNarrow, HeadingHuge, Text, FlexCol } from "../../styles";

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