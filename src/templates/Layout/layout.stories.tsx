import { Story, Meta } from '@storybook/react'
import { Layout } from './layout'

export default {
  title: 'Template - Layout',
  component: Layout
} as Meta

export const LayoutStory: Story = (args) => (
  <Layout {...args}>
    <div style={{ height: '400px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
      malesuada nulla. Suspendisse vulputate risus volutpat justo lacinia
      lacinia. Aliquam nibh neque, venenatis in mi sit amet, dictum tincidunt
      massa. Morbi porttitor dui eu neque luctus, sit amet rhoncus nulla
      lacinia. Vestibulum at tincidunt leo. Morbi sit amet justo fermentum,
      volutpat lacus nec, dapibus ipsum. Morbi sollicitudin est vel lacus
      vehicula commodo lacinia id turpis. Sed bibendum ullamcorper elit nec
      commodo. Cras fringilla nisi nisl, et tincidunt risus aliquet quis.
      Vestibulum feugiat ultricies aliquam. Aenean a felis condimentum, varius
      metus id, auctor urna. Phasellus dictum purus nec tempor tristique. Donec
      pellentesque bibendum dui, eu rhoncus ligula viverra id. Praesent orci
      quam, finibus vitae felis quis, bibendum rutrum mi. Praesent tempor ligula
      sit amet purus auctor, at ullamcorper ipsum cursus. Donec vel venenatis
      mi. In dictum tincidunt est, et tincidunt metus auctor eget. Nam id
      facilisis eros. Cras semper libero lorem, sit amet egestas diam sagittis
      nec. Mauris id erat auctor, sodales nunc ac, pellentesque magna. Donec
      interdum et nunc non lobortis. Sed lectus nisl, dictum quis tortor a,
      feugiat imperdiet est. Mauris vestibulum arcu euismod maximus posuere.
      Vivamus sed mollis felis. Pellentesque id ex sodales, facilisis metus
      eget, venenatis leo. Ut in lacus diam. Aenean sed sem ac orci posuere
      blandit. Aenean ac tempus diam, sit amet finibus risus. Quisque non augue
      in est tempor tempus eu et dui. Vivamus eu mi mauris. Quisque efficitur
      fringilla lectus, non mollis massa ornare sed. In hac habitasse platea
      dictumst. Nam non leo suscipit arcu malesuada tristique quis ut est. Nulla
      rhoncus malesuada tristique. Phasellus eu nulla semper, porta erat ut,
      malesuada leo. In semper, metus quis facilisis pharetra, enim neque
      finibus sem, non finibus eros libero sagittis lacus. Nam facilisis vel sem
      nec scelerisque. Pellentesque vitae nisi sodales, scelerisque libero et,
      rutrum leo. Morbi commodo placerat dictum. Sed hendrerit mollis augue, sed
      vehicula quam mattis ac. Morbi pulvinar posuere aliquet. Nunc sed nunc
      quam. Curabitur a lacus eleifend, luctus purus eget, molestie augue. Nam
      erat lorem, rhoncus a
    </div>
  </Layout>
)
