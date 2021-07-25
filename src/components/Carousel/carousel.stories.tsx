import { Story, Meta } from '@storybook/react'
import { P } from 'components/Typography/typography.style'

import { Carousel } from './carousel'

export default {
  title: 'Carousel component',
  component: Carousel
} as Meta

export const CarouselStory: Story = (args) => (
  <Carousel {...args}>
    <P color="primarymain">Sou o conteúdo do carousel</P>
    <P color="primarymain">Sou o conteúdo do carousel</P>
    <P color="primarymain">Sou o conteúdo do carousel</P>
    <P color="primarymain">Sou o conteúdo do carousel</P>
  </Carousel>
)
