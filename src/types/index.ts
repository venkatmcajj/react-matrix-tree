enum Tooltiptype {
  HTML,
  TEXT,
}
export interface IColor {
  color: string
}
export type Arrayvalues = {
  imageSource?: string
  title: string
  tooltip?: string
  tooltiptype?: Tooltiptype
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, item: Arrayvalues) => void
  data?: Array<Arrayvalues>
}
export type Props = {
  data: Array<Arrayvalues>
  isMobile: boolean
  color: string
}
export type TreeProps = {
  childrens: Array<Arrayvalues>
  level: number
  ismobileview: boolean
  color: string
}
