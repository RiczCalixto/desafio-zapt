import { render, screen } from 'utils/test-utils'

import { Layout } from './layout'

describe('<Base />', () => {
  it('should render base template with logo and footer', () => {
    const { container } = render(
      <Layout>
        <h1>Content</h1>
      </Layout>
    )
    const img = screen.getByRole('img', { name: /Imagem de logo da Zapt/i })
    const heading = screen.getByRole('heading', { name: /Content/i })
    const paragraph = screen.getByText(/Desafio Frontend Zapt 🧑‍💻/i)

    expect(img).toHaveAttribute('src', '/img/logo.svg')
    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
