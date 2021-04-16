import {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {SectionNarrow, FlexRow, fonts, respond} from '../../../styles'
import { categories, projects } from "./data"



export default function PortfolioComponent() {

  const [type, setType] = useState("")

  return (
    <SectionNarrow>
      <FlexRow margin='2.7rem 1.4rem' wrap='wrap'>
        <Cat onClick={()=>setType("")}>Wszystkie</Cat>
        {categories.map(cat=>{
          return(
            <Cat onClick={()=>setType(cat.type)} key={`${cat.display}-${cat.type}`}>{cat.display}</Cat>
          )
        })}
      </FlexRow>
      <Projects>
        {projects.map(project=>{
          
          if(!type || project.category===type){
            return(
            <Link href={`/services/${project.category}`} key={project.id}>
              <Project key={project.id}>
                <ImageContainer>
                  <img src={project.img} alt="project preview"/>
                </ImageContainer>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Project>
            </Link>
            )
          }else{
            return(
              <Link href={`/services/${project.category}`} key={project.id}>
                <Project key={project.id} style={{opacity: 0, visibility: 'hidden', width: 0, height: 0, margin: 0, padding: 0}}>
                  <ImageContainer>
                    <img src={project.img} alt="project preview"/>
                  </ImageContainer>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </Project>
              </Link>
              
            )
          }
          
        })}
      </Projects>
    </SectionNarrow>
  )
}
const Cat = styled.button`
  width: 10rem;
  margin: .9rem .4rem ;
  padding: 1rem 0;
  background-color: ${p=>p.theme.primaryDark};
  color: ${p=>p.theme.grey1};
  font-family: ${fonts.heading};
  font-size: 1.6rem;
  text-transform: capitalize;
  box-shadow: 0 0 1rem rgba(0,0,0,.6);
  cursor: pointer;
  transition: all .3s;

  ${()=>respond('m','padding: 1rem 2.7rem; width: 14rem; margin: 1.4rem;')}
  &:hover{
    background-color: ${p=>p.theme.primary};
  }
`
const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 25rem;
  position: relative;
  overflow: hidden;
`
const ImageContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  &:before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0, .1) );
    transition: all .3s;
  }
  img{
    transition: all .3s;
    min-height: 100%;
    width: 120%;
  }
`
const Project = styled.div`
  height: 28rem;
  width: 30rem;
  position: relative;
  margin: 1.4rem;
  padding: 1.4rem;
  transition: all .3s;
  box-shadow: 0 0 2rem rgba(0,0,0,.6);
  cursor: pointer;

  ${()=>respond('m','width: 28rem;')}
  h3{
    font-family: ${fonts.heading};
    text-shadow: .3rem .3rem .5rem rgba(0,0,0,.6);
    color: white;
    font-weight: 600;
    font-size: 2.7rem;
    line-height: 1.2;
    transition: all .3s;
    margin-top: 4rem;
    margin-bottom: 1.4rem;
    text-transform: uppercase;
  }
  p{
    color: white;
    font-family: ${fonts.heading};
    font-size: 1.6rem;
    opacity: 1;
    transition: all .3s;
  }
  &:hover{
    box-shadow: 0 0 1rem rgba(0,0,0,.3);
    h3{
      margin-top: 1.4rem;
    }
    p{
      opacity: 1;
    }
    ${ImageContainer}{
      img{
        transform: translateX(-10%);
      }
      &::before{
        background-image: linear-gradient(to bottom, rgba(0,0,0,.6) 10%, transparent);
        z-index:9;
      }
    }
  }
  
`