import styled, { css } from 'styled-components'

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';

  height: 100%;
`

export const Header = styled.nav`
  ${({ theme }) => css`
    grid-area: header;
    display: flex;
    justify-content: center;

    border-bottom: 1px solid ${theme.colors.softblack};
    padding: 5px 0;
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    height: ${theme.spacings.medium};
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    grid-area: main;

    max-width: ${theme.breakpoints.desktop}px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 10px;
    padding-left: 10px;
  `}
`

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`
