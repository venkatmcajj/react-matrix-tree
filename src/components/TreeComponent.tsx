import React from 'react'
import { Arrayvalues, TreeProps } from '../types'
import MainView from './MainView'
import ChildView from './ChildView'

export const GetTree = ({ childrens, level, ismobileview, color }: TreeProps) => {
  return (
    <div style={{ display: 'flex', textAlign: 'center' }}>
      {childrens.map((e: Arrayvalues, i: any) => {
        return (
          <div key={`${level}${e.title}${i}`} style={{ minWidth: `${100 / childrens.length}%` }}>
            <MainView data={e} />
            <ChildView color={color} ismobileview={ismobileview} item={e} level={level} />
          </div>
        )
      })}
    </div>
  )
}
