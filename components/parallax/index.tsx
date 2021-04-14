import {useEffect, useRef} from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { HeadingHuge, BilboardContainer, Text, ButtonPrimary } from "../../styles";

interface ParallaxProps{
  title?: string;
  body?: string;
  btn?: string;
}

export default function ParallaxBackground({ title, body, btn }: ParallaxProps) {

    const target = useRef()

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(target.current, {autoAlpha: 1, duration: 1, scrollTrigger:{
            trigger: target.current,
            start: 'top 80%',
            toggleActions: 'restart none none reset'
        }})
    },[])

    return (
        <BilboardContainer ref={target}>
            <HeadingHuge>
                {title
                    .split(" ")
                    .map((word, i) =>
                        i === 1 ? <span key={i}>{word} </span> : word + " "
                    )}
            </HeadingHuge>
            <Text wide='65rem' align="center" margin='2.7rem 0' color='white'>
                {body}
            </Text>
            <Link href='/'>
                  <ButtonPrimary>{btn}</ButtonPrimary>
            </Link>
        </BilboardContainer>
    );
}
