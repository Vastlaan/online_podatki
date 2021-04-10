import styled from 'styled-components'
import {FlexibleComponentProps} from '../types'

export const Line = styled.div<FlexibleComponentProps>`
  height: 1px;
  background-color: ${p=>p.color?p.color:p.theme.grey2};
  width: ${p=>p.wide?p.wide:'100%'};

`