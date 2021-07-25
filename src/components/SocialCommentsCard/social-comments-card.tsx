import { Avatar } from 'components/Avatar/avatar.style'
import { Card } from 'components/Card/card'
import {
  Hbox,
  HboxItem,
  HboxSeparator,
  Separator
} from 'components/Hbox/hbox.style'
import { P, H4 } from 'components/Typography/typography.style'

type SocialCommentsCardProps = {
  description: string
  avatarUrl: string
  name: string
}

export const SocialCommentsCard = ({
  description,
  avatarUrl,
  name
}: SocialCommentsCardProps) => (
  <Card>
    <blockquote cite={name}>
      <P as="q" color="primarymain">
        {description}
      </P>
      <Separator />
      <Hbox>
        <HboxItem vAlign="center" noGrow>
          <Avatar borderColor="primarylight" imageUrl={avatarUrl} />
        </HboxItem>
        <HboxSeparator />
        <HboxItem vAlign="center">
          <H4 as="cite" color="primaryxdark">
            {name}
          </H4>
        </HboxItem>
      </Hbox>
    </blockquote>
  </Card>
)
