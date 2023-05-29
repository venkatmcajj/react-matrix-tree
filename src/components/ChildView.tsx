import React, { useEffect } from 'react'
import { Arrayvalues } from '../types'
import { GetTree } from './TreeComponent'

type ChildProps = {
  ismobileview: boolean
  level: number
  item: Arrayvalues
  color: string
}
function ChildView({ ismobileview, level, item, color }: ChildProps) {
  useEffect(() => {
    const ele = document.documentElement
    ele.style.setProperty('--treecolor', color)
  }, [color])
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
            <div className='toparrowup-container'>
              <div className='toparrowup' />
            </div>
            <div className='bottomarrow' />
            <div className='bottomarrowdown-container'>
              {data &&
                data.map((e1: Arrayvalues, index1: number) => {
                  return <div className='bottomarrowdown' key={`${e1.title}${index1}${level}`}></div>
                })}
            </div>
          </div>
          <GetTree color={color} childrens={data} level={level + 1} ismobileview={ismobileview} />
        </>
      )}
    </div>
  )
}

export default ChildView
