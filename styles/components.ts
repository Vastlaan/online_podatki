import styled from 'styled-components'
import {fonts} from './fonts'
import {FlexibleComponentProps, ListItemProps} from '../types'
import { respond } from '.'

export const List = styled.ul<FlexibleComponentProps>`
  list-style: none;
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'flex-start'};
  align-items: ${p=>p.align?p.align:'stretch'};
`
export const Item = styled.li<FlexibleComponentProps>`
    font-size: 1.6rem;
    color: ${p=>p.color?p.color:p.theme.grey3};
    transition: all .3s;
    text-decoration: underline;
    display: flex;
    align-items: center;
    margin: ${p=>p.margin?p.margin:'0'};
    cursor: pointer;

    &:hover{
      transform: translateX(1rem);
    }

    svg{
      font-size: 2.2rem;
      color: ${p=>p.theme.secondaryLight};
      margin-right: .4rem;
    }
`

export const Anchor = styled.a<FlexibleComponentProps>`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.6rem;
  color: ${p=>p.theme.white};
  transition: all .3s;
  display: flex;
  align-items: center;

  svg{
    font-size: 2.2rem;
    color: ${p=>p.theme.secondaryLight};
    margin-right: .9rem;
  }

  &:hover{
    color: ${p=>p.theme.secondaryLight} !important;
  }
`

export const ListItem = styled.li<ListItemProps>`
  font-family: ${fonts.heading};
  font-weight: 500;
  font-size: 1.9rem;
  color: ${p=>p.theme.white};
  margin: 1.4rem;
  padding: .1rem 0;
  cursor: pointer; 
  position: relative;
  display: flex;
  align-items: center;
  
  ${()=>respond('m','margin: 0 1.4rem 0 0')}

  // &::after{
  //     content: '';
  //     position: absolute;
  //     bottom: -.5rem;
  //     left:0;
  //     width: 100%;
  //     height: 2px;
  //     transition: all .3s;
  //     background-color: transparent;
  //   }
   &::before{
      content: '';
      position: absolute;
      top: ${p=>p.active?'0':'-.5rem'};
      left:0;
      width: 100%;
      height: 2px;
      transition: all .3s;
      background-color: ${p=>p.active?p.theme.secondaryLight:'transparent'};
    }

  &:hover{
    // &::after{
    //   bottom: 0rem;
    //   background-color: ${p=>p.theme.secondaryLight};
    // }
    &::before{
      top: 0rem;
      background-color: ${p=>p.theme.secondaryLight};
    }
  }
`

export const Field = styled.div`
    width: 100%;
    max-width: 65rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.4rem 0;

    label {
        color: ${(p) => p.theme.grey4};
        font-size: 1.9rem;
        margin-bottom: 0.9rem;
    }
    input,
    textarea {
        width: 100%;
        max-width:65rem;
        border: none;
        border: 1px solid rgba(0,0,0,.3);
        padding: 0.9rem 1.4rem;
        font-size: 1.6rem;
        color: ${(p) => p.theme.grey3};
    }
    p {
        font-size: 1.4rem;
        color: ${(p) => p.theme.grey4};
    }
    small {
        font-size: 1rem;
        margin: 0.6rem 0;
        color: orangered;
    }
    span {
        color: ${(p) => p.theme.secondary};
    }
`;