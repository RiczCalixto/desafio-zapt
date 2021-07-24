import { Separator } from 'components/Hbox/hbox.style'
import { Main } from 'components/Main/main.style'
import { SocialComments } from 'components/SocialComments/social-comments'
import { UserComments } from 'components/UserComments/user-comments'

export default function Home() {
  return (
    <Main>
      <SocialComments />
      <Separator />
      <UserComments />
    </Main>
  )
}
