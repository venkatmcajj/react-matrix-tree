import React from 'react'
import { Props } from '../types'
import { GetTree } from './TreeComponent'
import styled from 'styled-components'
const TreeContainer = styled.div`
  width: max-content;
  height: max-content;
`
const Tree = ({ data, isMobile, color }: Props) => {
  return (
    <TreeContainer>
      <GetTree color={color} childrens={data} level={1} ismobileview={isMobile ?? false} />
    </TreeContainer>
  )
}

export default Tree
