import { BreakPoints } from 'model/commom-style-types'
import React from 'react'
import ElasticCarousel from 'react-elastic-carousel'

type CarouselProps = {
  children: React.ReactNode
}

export const Carousel = ({ children }: CarouselProps) => (
  <ElasticCarousel isRTL={false} breakPoints={breakPoints} disableArrowsOnEnd>
    {children}
  </ElasticCarousel>
)

const breakPoints = [
  { width: BreakPoints.TABLET, itemsToShow: 1 },
  { width: BreakPoints.XDESKTOP, itemsToShow: 2, itemsToScroll: 2 }
]
