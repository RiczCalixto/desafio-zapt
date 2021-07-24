import { Masonry } from 'components/Masonry/masonry'
import { mockCardData } from 'components/SocialCommentsCard/mock-card.data'
import { SocialCommentsCard } from 'components/SocialCommentsCard/social-comments-card'
import { H2, Header } from 'components/Typography/typography.style'

export const SocialComments = () => (
  <article>
    <Header hAlign="center">
      <H2>O que estão falando nas redes sociais</H2>
    </Header>

    <Masonry>
      {mockCardData.map((props) => (
        <SocialCommentsCard key={props.id} {...props} />
      ))}
    </Masonry>
  </article>
)
