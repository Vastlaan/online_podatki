import styled from 'styled-components'
import {FlexibleComponentProps} from '../types'

export const List = styled.ul<FlexibleComponentProps>`
  list-style: none;
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'flex-start'};
  align-items: ${p=>p.align?p.align:'stretch'};
`
export const ListItem = styled.li<FlexibleComponentProps>`
    font-size: 1.6rem;
    color: ${p=>p.theme.grey3};
    transition: all .3s;
    display: flex;
    align-items: center;
    margin: ${p=>p.margin?p.margin:'0'};

    svg{
      font-size: 2.2rem;
      color: ${p=>p.theme.secondary};
      margin-right: .4rem;
    }
`

export const Anchor = styled.a`
  font-size: 1.6rem;
  color: ${p=>p.theme.white};
  transition: all .3s;
  display: flex;
  align-items: center;

  svg{
    font-size: 2.2rem;
    color: ${p=>p.theme.secondary};
    margin-right: .4rem;
  }

  &:hover{
    color: ${p=>p.theme.secondary};
  }
`