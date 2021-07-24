import { Avatar } from 'components/Avatar/avatar.style'
import { Card } from 'components/Card/card'
import {
  Hbox,
  HboxItem,
  HboxSeparator,
  Separator
} from 'components/Hbox/hbox.style'
import { P, H4, H5 } from 'components/Typography/typography.style'
import * as S from './user-opinion-card.style'

export type UserOpinionCardProps = {
  description: string
  avatarUrl: string
  name: string
  state: string
  city: string
  backgroundUrl: string
}

export const UserOpinionCard = (props: UserOpinionCardProps) => {
  const { description, avatarUrl, name, state, city, backgroundUrl } = props
  return (
    <Card noGutter src={backgroundUrl}>
      <S.SectionWrapper>
        <P color="white" size="xlarge">
          <q>{description}</q>
        </P>
        <Separator />
        <Hbox>
          <HboxItem vAlign="center" noGrow>
            <Avatar imageUrl={avatarUrl} />
          </HboxItem>
          <HboxSeparator />
          <HboxItem vAlign="center" noGrow>
            <H4 color="white">{name}</H4>
            <H5 color="white">
              {city} •{state}
            </H5>
          </HboxItem>
        </Hbox>
      </S.SectionWrapper>
    </Card>
  )
}
