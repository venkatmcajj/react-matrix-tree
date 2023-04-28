import React from 'react'
import { Arrayvalues } from '../types'
type MainViewTypes = {
  data: Arrayvalues
}
function MainView({ data }: MainViewTypes) {
  return (
    <div>
      {data.imageSource && <img src={data.imageSource} style={{ height: 40, width: 40 }} />}
      <h5
        onClick={(event) => {
          if (data.onClick) {
            data.onClick(event, data)
          }
        }}
        title={data.tooltip}
      >
        {data.title}
      </h5>
    </div>
  )
}

export default MainView
