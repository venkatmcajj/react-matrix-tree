import React from 'react'
import { Arrayvalues, IColor } from '../types'
import { GetTree } from './TreeComponent'
import styled from 'styled-components'

const BottomArrow = styled.div<IColor>`
  border-bottom: 5px solid ${(props) => props.color};
`
const BottomArrowDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-right: -19px;
    margin-left: auto;
  }
`
const TopArrowUpContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})
const BottomArrowDown = styled.div<IColor>`
  content: '';
  width: 0;
  height: 0;
  margin-left: -19px;
  border-top: 15px solid ${(props) => props.color};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-top: 20px;
  position: relative;
  &::before {
    content: '';
    width: 4px;
    height: 25px;
    background: ${(props) => props.color};
    margin-right: -2px;
    margin-bottom: 14px;
    position: absolute;
    bottom: 100%;
    right: 50%;
  }
`
const TopArrowUp = styled.div<IColor>`
  content: '';
  width: 0;
  height: 0;
  border-bottom: 15px solid ${(props) => props.color};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-bottom: 20px;
  position: relative;
  &::before {
    content: '';
    width: 4px;
    height: 25px;
    background: ${(props) => props.color};
    margin-right: -3px;
    margin-top: 14px;
    position: absolute;
    top: 100%;
    right: 50%;
  }
`

type ChildProps = {
  ismobileview: boolean
  level: number
  item: Arrayvalues
  color: string
}
function ChildView({ ismobileview, level, item, color }: ChildProps) {
  const { data = [] } = item
  let canShowChild = false
  if (ismobileview) {
    if (level <= 3 && data.length <= 2) {
      canShowChild = true
    }
  } else if (data.length <= 4) {
    canShowChild = data.length > 0 && level <= 4 ? true : false
  } else {
    canShowChild = false
  }
  return (
    <div>
      {canShowChild && (
        <>
          <div
            style={{
              width: data && data.length > 0 ? `${100 - 100 / data.length}%` : 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 10,
            }}
          >
            <TopArrowUpContainer>
              <TopArrowUp color={color} />
            </TopArrowUpContainer>
            <BottomArrow color={color} />
            <BottomArrowDownContainer>
              {data &&
                data.map((e1: Arrayvalues, index1: number) => {
                  return <BottomArrowDown color={color} key={`${e1.title}${index1}${level}`}></BottomArrowDown>
                })}
            </BottomArrowDownContainer>
          </div>
          <GetTree color={color} childrens={data} level={level + 1} ismobileview={ismobileview} />
        </>
      )}
    </div>
  )
}

export default ChildView
