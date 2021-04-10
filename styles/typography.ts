import styled from 'styled-components'
import {fonts} from './fonts'
import {ThemeProps, FlexibleComponentProps} from '../types'

export const Company = styled.h1<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.para};
  font-weight: 500;
  font-size: ${p=>p.size?p.size:'2.2rem'};
  line-height: 1.3;
  color: ${p=>p.color?p.color:p.theme.white};
  cursor: pointer;

  span{
    color: ${p=>p.theme.secondary};
  }
`

export const Heading1 = styled.h1<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  font-family: ${fonts.heading};
  font-size: 3.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(p)=>p.color?p.color:p.theme.black};
  text-align: ${p=>p.align?p.align:'left'};
  max-width: ${(p:FlexibleComponentProps)=>p.wide?p.wide:'65rem'};

  span{
    color: ${(p)=>p.color?p.color:p.theme.secondary};
  }
`

export const Heading3 = styled.h3<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  font-family: ${fonts.heading};
  font-size: 2.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(p)=>p.color?p.color:p.theme.black};
  text-align: ${p=>p.align?p.align:'left'};
`

export const Text = styled.p<FlexibleComponentProps>`
  margin: ${(p) =>p.margin?p.margin:"0"};
  font-size: 1.6rem;
  color: ${(p)=>p.color?p.color:p.theme.grey3};
  max-width: ${(p:FlexibleComponentProps)=>p.wide?p.wide:'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`

export const TextItalic = styled.p<FlexibleComponentProps>`
    margin: ${(p) => (p.margin ? p.margin : "0")};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: ${(p) => (p.color ? p.color : p.theme.secondary)};
`;