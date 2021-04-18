import styled from 'styled-components'
import {fonts} from './fonts'
import { FlexibleComponentProps} from '../types'
import respond from './respond'

export const Company = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.para};
  font-weight: 500;
  font-size: ${p=>p.size?p.size:'2.2rem'};
  line-height: 1.3;
  color: ${p=>p.color?p.color:p.theme.white};
  cursor: pointer;

  span{
    color: ${p=>p.theme.secondary} !important;
  }
`

export const HeadingHuge = styled.h1<FlexibleComponentProps>`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 3.7rem;
    font-weight: 700;
    color: ${(p) => (p.color ? p.color : p.theme.grey1)};
    line-height: 1.3;
    text-transform: uppercase;
    text-align: ${(p) => (p.align ? p.align : "center")};
    text-shadow: .2rem .3rem .3rem rgba(0,0,0,.3);
    max-width: ${(p)=>p.wide?p.wide:'95rem'};
    letter-spacing: 0.2rem;
    ${() => respond("s", "font-size: 4.7rem;")}
    ${(p)=>respond('l',`max-width:${p.wide?p.wide:'95rem'}; `)}
    span {
        color: ${(p) => p.theme.secondaryLight};
    }
`;

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-family: ${fonts.heading};
  font-size: 4.4rem;
  font-weight: 600;
  line-height: 1.2;
  text-shadow: .3rem .3rem .5rem rgba(0,0,0,.3);
  color: ${(p)=>p.color?p.color:p.theme.grey3};
  text-align: ${p=>p.align?p.align:'left'};
  max-width: ${(p:FlexibleComponentProps)=>p.wide?p.wide:'65rem'};

  span{
    color: ${p=>p.theme.secondaryLight} !important;
    font-weight: 600;
  }
`

export const Heading3 = styled.h3<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(p)=>p.color?p.color:p.theme.black};
  text-align: ${p=>p.align?p.align:'left'};
`
export const Heading4 = styled.h3<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-family: ${fonts.heading};
  font-size: 2.2rem;
  font-weight: 600;
  
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  text-align: ${p=>p.align?p.align:'left'};
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: -1.4rem;
    height: 100%;
    width: 5px;
    background-color: ${p=>p.theme.primaryDark};

  }
`

export const Heading6 = styled.h6<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-family: ${fonts.heading};
  font-size: 2.4rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:p.theme.black};
  text-align: ${p=>p.align?p.align:'left'};
`

export const Text = styled.p<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-size: 1.8rem;
  color: ${(p)=>p.color?p.color:p.theme.grey3};
  max-width: ${(p)=>p.wide?p.wide:'45rem'};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    text-decoration: underline;
  }
`

export const Text3 = styled.p`
    margin: .6rem 0;
    display: inline-block;
    font-size: 1.9rem;
    font-family: ${fonts.heading};
    color: ${p=>p.theme.black};

    ${()=>respond('m','margin: .3rem 0;')}

    span{
        color:${p=>p.theme.secondaryLight};
        font-weight: 600;
    }
`

export const TextItalic = styled.p<FlexibleComponentProps>`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    padding: ${p=>p.padding?p.padding:'0'};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${(p) => (p.color ? p.color : p.theme.secondary)};
`;