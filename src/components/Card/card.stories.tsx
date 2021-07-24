import { Story, Meta } from '@storybook/react'
import { P } from 'components/Typography/typography.style'
import { Card } from './card'

export default {
  title: 'Card component',
  component: Card
} as Meta

export const CardStory: Story = (args) => (
  <Card {...args}>
    <P color="primarymain">Sou o conteúdo do card!</P>
  </Card>
)
