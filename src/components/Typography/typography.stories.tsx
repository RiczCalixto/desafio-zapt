import { Story, Meta } from '@storybook/react'
import { H2, P, H4, H5, H3 } from './typography.style'

export default {
  title: 'Typography components'
} as Meta

export const TypographyStory: Story = () => (
  <>
    <H2>Sou um H2</H2>
    <H3>Sou um H3</H3>
    <H4 color="primaryxdark">Sou um H4 com primaryxdark color</H4>
    <H5>Sou um H5</H5>
    <P>Sou um Body</P>
    <P color="primarymain">Sou um Body com primary color</P>
  </>
)
