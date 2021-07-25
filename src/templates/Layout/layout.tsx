import { P } from 'components/Typography/typography.style'
import * as S from './layout.style'

type LayoutProps = { children: React.ReactNode }

export const Layout = ({ children }: LayoutProps) => (
  <S.GridArea>
    <S.Header>
      <S.Logo src="/img/logo.svg" alt="Imagem de logo da Zapt" />
    </S.Header>
    <S.Main>{children}</S.Main>
    <S.Footer>
      <P>Desafio Frontend Zapt 🧑‍💻</P>
    </S.Footer>
  </S.GridArea>
)
