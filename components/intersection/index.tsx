import {useEffect, useRef} from 'react'
import Link from "next/link";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {  withTheme } from "styled-components";
import {
    FlexCol,
    Heading3,
    Text,
    TextItalic,
    ButtonPrimary,
    Line,
    SectionNarrowAnimated,
} from "../../styles";
import {ThemeProps} from '../../types'

interface IntersectionProps extends ThemeProps{
  category: string;
  title: string;
  body: string;
  link?: string;
}

function IntersectionComponent({ category, title, body, link, theme }: IntersectionProps) {

    const container = useRef()

    useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(container.current,{autoAlpha: 1, y: '100'}, {autoAlpha: 1, y: 0, duration: .6, scrollTrigger: {
                    trigger: container.current, 
                    start: "top bottom",
                    toggleActions: "restart none none reset",
                }
        })
    },[])

    return (
        <SectionNarrowAnimated ref={container} margin="9.7rem auto">
            <FlexCol padding='1.4rem'>
              <TextItalic color={theme.secondary}>{category}</TextItalic>
              <Heading3 margin='0 auto 1.4rem auto' align='center'>{title}</Heading3>
              <Line wide='15rem' color={theme.secondary}/>
              <Text color={theme.grey3} margin=' 1.4rem auto'>{body}</Text>
              {link && (
                  <Link href={link}>
                      <ButtonPrimary margin="1.4rem auto">
                          Lees meer
                      </ButtonPrimary>
                  </Link>
              )}
            </FlexCol>
        </SectionNarrowAnimated>
    );
}

export default withTheme(IntersectionComponent);