import styled from 'styled-components'
import {FlexibleComponentProps} from '../types'

export const Line = styled.div<FlexibleComponentProps>`
  height: 1px;
  background-color: ${p=>p.color?p.color:p.theme.grey2};
  width: ${p=>p.wide?p.wide:'100%'};
  margin: ${p=>p.margin?p.margin:'0'};

`

export const Icon = styled.div<FlexibleComponentProps>`

  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};  

  svg{
    font-size: 4.7rem;
    color: ${p=>p.color?p.color:p.theme.primaryDark};
  }
`