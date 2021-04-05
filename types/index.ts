import {  DefaultTheme } from 'styled-components'


export interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string,
    secondary?: string,
    greyLight?: string,
    greyDark?: string,
    black?: string,
    white?: string
  }
  color?:string
}
export interface FlexibleComponentProps{
  padding?: string;
  margin?: string;
  color?:string;
  wide?: string;
  align?: string;
}