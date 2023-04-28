import React from 'react'
import { Props } from '../types'
import { GetTree } from './TreeComponent'

const Tree = ({ data, isMobile, color }: Props) => {
  return <GetTree color={color} childrens={data} level={1} ismobileview={isMobile ?? false} />
}

export default Tree
