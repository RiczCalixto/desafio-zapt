import styled, { css } from 'styled-components'

import { AvatarProps } from './avatar.model'

export const Avatar = styled.div<AvatarProps>`
  ${({ size = 'small', imageUrl, borderColor = 'white', theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.imageSizes[size]};
    height: ${theme.imageSizes[size]};
    background: ${theme.colors.white} url(${imageUrl}) no-repeat center center;
    background-size: cover;
    color: ${theme.colors.black};
    border-radius: ${theme.border.circle};
    border: 1px solid ${theme.colors[borderColor]};
  `}
`
