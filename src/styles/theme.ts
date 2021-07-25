import { BreakPoints } from 'model/commom-style-types'

export const theme = {
  breakpoints: {
    mobile: BreakPoints.MOBILE,
    tablet: BreakPoints.TABLET,
    desktop: BreakPoints.DESKTOP,
    xdesktop: BreakPoints.XDESKTOP
  },
  border: {
    radius: '0.4rem',
    circle: '50%'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '4rem'
    }
  },
  colors: {
    primarymain: '#011FBB',
    primarylight: '#334BC8',
    primaryxlight: '#E9F4FE',
    primaryxdark: '#001C33',
    white: '#FAFAFA',
    black: '#000000',
    softblack: 'rgba(0, 0, 0, 0.12)',
    neutral: '#5C5B5B'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  imageSizes: {
    small: '6.4rem',
    medium: '8rem',
    large: '15rem'
  }
} as const
