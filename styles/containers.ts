import styled from 'styled-components'
import {FlexibleComponentProps, ThemeProps} from '../types'

// SECTIONS AND HEADERS

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.theme.greyLight};
  padding: 1.4rem;
`

