import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Link from "next/link";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {  withTheme } from "styled-components";
import {
    respond,
    FlexCol,
    FlexRow,
    Heading3,
    Text,
    TextItalic,
    ButtonPrimary,
    Line,
    Icon,
    SectionNarrowAnimated,
} from "../../styles";
import {ThemeProps} from '../../types'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

interface IntersectionProps extends ThemeProps{
  category: string;
  title: string;
  body: string;
  link?: string;
  margin?:string;
}

function IntersectionComponent({ category, title, body, link, margin, theme }: IntersectionProps) {

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
        <SectionNarrowAnimated ref={container} margin={margin?margin:"6.7rem auto"}>
            <FlexCol padding='1.4rem'>
              <TextItalic color={theme.primaryLight}>{category}</TextItalic>
              <Heading3 margin='0 auto 1.4rem auto' align='center'>{title}</Heading3>

              <Lines>
                <Line wide='40%' color={theme.primaryDark}/>
                <Icon margin='0 1.4rem'>
                    <RiMoneyEuroCircleLine/>
                </Icon>
                <Line wide='40%' color={theme.primaryDark}/>
              </Lines>
              
              <Text color={theme.grey3} wide='65rem' margin=' 1.4rem auto'>{body}</Text>
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

const Lines = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38rem;

    ${()=>respond('m','width: 65rem;')}
`