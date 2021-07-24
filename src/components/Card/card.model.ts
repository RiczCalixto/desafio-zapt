import { Color } from 'model/commom-style-types'

export type CardProps = {
  color?: Color
  noGutter?: boolean
  src?: string
  children?: React.ReactNode
}
