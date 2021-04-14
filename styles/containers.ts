import styled from 'styled-components'
import respond from './respond'
import {FlexibleComponentProps, ThemeProps} from '../types'


// GRIDS

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2.7rem;
  ${()=>respond('s', 'grid-template-columns: 1fr 1fr;')}
  ${()=>respond('m', 'grid-template-columns: 55rem 1fr;')}
  ${()=>respond('l', 'grid-template-columns: 65rem 1fr;')}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.4rem;
  grid-gap: 1.4rem;
  ${()=>respond('m', 'grid-template-columns: 1fr 1fr;')}
`

// SECTIONS AND HEADERS

export const Header = styled.header<FlexibleComponentProps>`
    padding: 2.7rem 0;
    padding-top: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 30vh;
    background-image: linear-gradient(
            to bottom,
            rgba(52, 104, 151, 0.9),
            rgba(52, 104, 151, 0.6)
        ),
        url(${(p) => (p.url ? p.url : "./img/header-3.jpg")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    visibility: hidden;
    ${() => respond("m", `padding-top: 9.7rem; min-height: 50vh`)}
`;

export const SectionWide = styled.section<FlexibleComponentProps>`
  width: 100%;
  position: relative;
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding:${p=>p.padding?p.padding:'0'};
  background-color: ${p=>p.background?p.background:'transparent'};
`

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
`
export const SectionNarrowAnimated = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
  transform: translateY(100px);
  opacity: 0;
  visibility: hidden;
`

// CONTAINERS

export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  max-width: 996px;
  width: 100vw;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: ${p=>p.padding?p.padding:'0'};

  ${()=>respond('l', 'width:996px;')}
`
export const ContainerNarrow2 = styled.div<FlexibleComponentProps>`
  max-width: 996px;
  width: 100vw;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: ${p=>p.padding?p.padding:'0'};

  ${()=>respond('l', 'width:996px;')}
`

export const FlexRow = styled.div<FlexibleComponentProps>`
  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
  max-width: ${p=>p.wide?p.wide: 'auto'};
`
export const FlexCol = styled.div<FlexibleComponentProps>`
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
`

export const ContainerAnimated = styled.div`
  transform: translate(0, 100px);
  opacity: 0;
  visibility: hidden;
`
export const BilboardContainer = styled.section<FlexibleComponentProps>`
    width: 100%;
    padding: 3.3rem;
    height: 48rem;
    background-image: linear-gradient(
            to bottom,
            rgba(52, 104, 151, 0.7),
            rgba(52, 104, 151, 0.7)
        ),
        url(${(p) => (p.url ? p.url : "./img/header-2.jpg")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
`;

export const ContactBox = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2.7rem 2.7rem 2.7rem;
  padding: 1.4rem;
  background-color: rgba(70, 141, 204,.1);
  border-radius: 1rem;
  transition: all .3s;
  cursor: pointer;
  box-shadow: 0 0 1rem rgba(0, 0, 0,.5);

  &:hover{
    background-color: rgba(70, 141, 204,.2);
  }
`
