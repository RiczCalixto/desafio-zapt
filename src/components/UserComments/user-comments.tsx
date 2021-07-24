import { Carousel } from 'components/Carousel/carousel'
import { H2, Header } from 'components/Typography/typography.style'
import { mockOpinionCard } from 'components/UserOpinionCard/mock-opinion-card.data'
import { UserOpinionCard } from 'components/UserOpinionCard/user-opinion-card'

export const UserComments = () => (
  <article>
    <Header hAlign="center">
      <H2>O que as pessoas estão achando</H2>
    </Header>

    <Carousel>
      {mockOpinionCard.map((props) => (
        <UserOpinionCard key={props.id} {...props} />
      ))}
    </Carousel>
  </article>
)
