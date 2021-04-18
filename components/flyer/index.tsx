import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image'
import {ReactElement, useEffect, useRef} from 'react'
import {ContainerAnimated, FlexCol, FlexRow, Heading4, Text, TextItalic} from '../../styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {respond, fonts} from '../../styles'

export default function Personel({article, animation}) {

  const target = useRef()

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.to(target.current, {autoAlpha: 1, y:0, x:0, duration: 1});
    ScrollTrigger.create({
      trigger: target.current, 
      start: "top 90%",
      onEnter: () => anim.restart(true)
    });
  },[])
  return (
    <ContainerAnimated ref={target} animation={animation}>
      <Container>
        <Link href={`/news/${article.id}`}>
          <Main key={article.id}>
            <Heading4 margin='1.4rem 0 1.4rem 1.4rem' align='left'>{article.title.substring(0, 25) + " ..."}</Heading4>
            <ImageContainer>
              <Image src={`https://api.itcontext.nl${article.image.url}`} alt="article" layout='fill' objectFit='cover'/>
            </ImageContainer>
            <FlexRow>
              {article.online_podatki_categories.map((cat) => {
                  return (
                      <small key={`category-${cat.id}`}>
                          #{cat.name}
                      </small>
                  );
              })}
            </FlexRow>
            
            <Line/>
            <Text align='left'>{article.content.substring(0, 100) + " ..."}</Text>
            {/* <Social>
              {person.twitter && <Link href={person.twitter}><FaTwitterSquare/></Link>}
              {person.facebook && <Link href={person.facebook}><FaFacebookSquare/></Link>}
              {person.linkedin && <Link href={person.linkedin}><FaLinkedin/></Link>}
            </Social> */}
          </Main>
        </Link>

      </Container>
    </ContainerAnimated>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 35rem;
  margin: 2.7rem;
  ${()=>respond('m','flex-direction: row; justify-content: center;')}
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0,0,0,.3);
  width: 35rem;
  min-height: 20rem;
  transition: all .3s;
  margin-bottom: 2.7rem;
`
const Social = styled.div`
  display: flex;
  justify-content: center;
  a{
    color: ${p=>p.theme.grey2};
    &:hover{
      color: blue;
    }
    svg{
      font-size: 1.9rem;
      margin-right: 1.4rem;
    }
  }
`
const Line = styled.div`
  margin: 1.4rem 0;
  width: 30%;
  height: 2px;
  background-color: ${p=>p.theme.grey3};
  transition: all .3s;
`

const Main = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  cursor: pointer;

  small{
    font-size: 1.2rem;
    font-style: italic;
    margin-right: .6rem;

  }
  &:hover{
    ${ImageContainer}{
      box-shadow: 0 0 2rem rgba(0,0,0,.6);
    }
    ${Line}{
      width: 100%;
    }
  }
`