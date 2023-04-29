import React from 'react'
import { Arrayvalues } from '../types'
type MainViewTypes = {
  data: Arrayvalues
}
function MainView({ data }: MainViewTypes) {
  return (
    <div>
      {data.imageSource && (
        <>
          <img src={data.imageSource} style={{ height: 40, width: 40 }} />
          <br />
        </>
      )}

      <label
        style={{ fontWeight: 'bold', fontSize: 14, whiteSpace: 'nowrap' }}
        onClick={(event) => {
          if (data.onClick) {
            data.onClick(event, data)
          }
        }}
        title={data.tooltip}
      >
        {data.title}
      </label>
    </div>
  )
}

export default MainView
