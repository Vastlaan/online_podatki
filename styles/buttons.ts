import styled from 'styled-components'
import {fonts} from './fonts'
import {FlexibleComponentProps} from '../types'

export const ButtonPrimary = styled.button<FlexibleComponentProps>`
    padding: 0.9rem 2.2rem;
    margin: ${(p) =>p.margin?p.margin:"0"};
    background-color: ${(p) => p.theme.primary};
    position: relative;
    z-index: 2;
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: .15rem;
    color: ${(p) => p.theme.white};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(p)=>p.wide?p.wide:'auto'};
    svg {
        margin-right: 1.4rem;
        font-size: 2.2rem;
    }
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(p) => p.theme.secondary};
        z-index: -1;
        transition: all 0.3s;
    }
    &:hover {
        &::after {
            top: 0;
        }
    }
`;
export const ButtonSecondary = styled.button<FlexibleComponentProps>`
    padding: 0.9rem 2.2rem;
    margin: ${(p) =>p.margin?p.margin:"0"};
    background-color: ${(p) => p.theme.secondary};
    position: relative;
    z-index: 2;
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: .15rem;
    color: ${(p) => p.theme.white};
    overflow: hidden;
    width: ${(p)=>p.wide?p.wide:'auto'};
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(p) => p.theme.primary};
        z-index: -1;
        transition: all 0.3s;
    }
    &:hover {
        &::after {
            top: 0;
        }
    }
`;

export const ButtonEmpty = styled.button<FlexibleComponentProps>`
    display: flex;
    align-items: center;
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.grey3};
    padding: 0.9rem 2.7rem;
    background-color: transparent;
    color: ${(p) => p.theme.grey3};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    max-width: ${(p)=>p.wide?p.wide:'45rem'};

    svg{
        font-size: 2.2rem;
        color: ${p=>p.theme.grey3};
        margin-right: .4rem;
        transition: all .3s;
    }
    &:hover {
        color: ${(p) => p.theme.white};
        background-color: ${(p) => p.theme.grey4};

        svg{
            color: ${p=>p.theme.white};
        }
    }
`;

export const ButtonEmptyReverse = styled.button<FlexibleComponentProps>`
    display: flex;
    align-items: center;
    margin: ${(p) => (p.margin ? p.margin : "0")};
    border: 1px solid ${(p) => p.theme.grey3};
    padding: 0.9rem 2.7rem;
    color: ${(p) => p.theme.white};
    background-color: ${(p) => p.theme.grey4};
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    font-weight: 400;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    max-width: ${(p)=>p.wide?p.wide:'45rem'};

    svg{
        font-size: 2.2rem;
        color: ${p=>p.theme.white};
        margin-right: .4rem;
        transition: all .3s;
    }
    &:hover {
        
        background-color: transparent;
        color: ${(p) => p.theme.grey3};

        svg{
            color: ${p=>p.theme.grey3};
        }
    }
`;