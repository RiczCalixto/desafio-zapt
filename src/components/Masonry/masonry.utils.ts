/**
 * This function sets the number of
 * masonry columns for each breakpoint
 * (mobile, tablet, desktop, large desktop)
 */

import { BreakPoints } from 'model/commom-style-types'

type MasonryBreakpoints = {
  mobile: number
  tablet: number
  desktop: number
  largeDesktop: number
}

export const buildResponsiveObject = ({
  mobile,
  tablet,
  desktop,
  largeDesktop
}: MasonryBreakpoints) => {
  return {
    [BreakPoints.MOBILE]: mobile,
    [BreakPoints.TABLET]: tablet,
    [BreakPoints.DESKTOP]: desktop,
    [BreakPoints.XDESKTOP]: largeDesktop
  }
}
