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
    max-width: 95rem;
    letter-spacing: 0.2rem;
    ${() => respond("s", "font-size: 4.7rem;")}
    span {
        color: ${(p) => p.theme.secondaryLight};
    }
`;

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding: ${p=>p.padding?p.padding:'0'};
  font-family: ${fonts.heading};
  font-size: 3.3rem;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: .3rem .3rem .5rem rgba(0,0,0,.3);
  color: ${(p)=>p.color?p.color:p.theme.black};
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
  max-width: ${(p:FlexibleComponentProps)=>p.wide?p.wide:'45rem'};
  text-align: ${p=>p.align?p.align:'center'};

  span{
    text-decoration: underline;
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