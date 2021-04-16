import {  DefaultTheme } from 'styled-components'



export interface ThemeProps extends DefaultTheme {
  theme: {
    primary?: string;
    primaryDark?:string;
    primaryLight?:string;
    secondary?: string;
    secondaryLight?:string;
    tertiary?: string;
    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;
    black?: string;
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
  size?: string;
  justify?: string;
  background?: string;
  url?: string;
  minHeight?:string;
  wrap?:string;
}

export interface ListItemProps{
  active?: boolean;
  margin?:string;
}

export interface ErrorObject{
  type: string;
  field: string;
  message: string;
}