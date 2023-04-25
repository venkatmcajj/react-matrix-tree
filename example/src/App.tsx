import React, { useState } from 'react'
import active from './active.png'
import { Tree } from '../../dist/esm'
enum Tooltiptype {
  HTML,
  TEXT,
}
type Arrayvalues = {
  imageSource?: string
  title: string
  tooltip?: string
  tooltiptype?: Tooltiptype
  onClick?: Function
  data?: Array<Arrayvalues>
}
function App() {
  const [data, setData] = useState<Array<Arrayvalues>>([
    {
      title: 'Venkat1',
      tooltip: 'Alert',
      imageSource: active,
      data: [
        {
          title: 'Venkat11',
          tooltip: 'Alert',
          imageSource: active,
          data: [
            {
              title: 'Add',
              tooltip: 'Alert',
              imageSource: active,
              data: [
                {
                  title: 'Add',
                  tooltip: 'Alert',
                  imageSource: active,
                  data: [
                    {
                      title: 'Add',
                      tooltip: 'Alert',
                      imageSource: active,
                      data: [
                        {
                          title: 'Add',
                          tooltip: 'Alert',
                          imageSource: active,
                          data: [],
                        },
                        {
                          title: 'Add',
                          tooltip: 'Alert',
                          imageSource: active,
                          data: [],
                        },
                      ],
                    },
                    {
                      title: 'Add',
                      tooltip: 'Alert',
                      imageSource: active,
                      data: [],
                    },
                  ],
                },
                {
                  title: 'Add',
                  tooltip: 'Alert',
                  imageSource: active,
                  data: [],
                },
              ],
            },
            {
              title: 'Add',
              tooltip: 'Alert',
              imageSource: active,
              data: [],
            },
          ],
        },
        {
          title: 'Venkat21',
          tooltip: 'Alert',
          imageSource: active,
          data: [
            {
              title: 'Venkat211',
              tooltip: 'Alert',
              imageSource: active,
              data: [],
            },
            {
              title: 'Venkat212',
              tooltip: 'Alert',
              imageSource: active,
              data: [],
            },
          ],
        },
        {
          title: 'Venkat21',
          tooltip: 'Alert',
          imageSource: active,
          data: [
            {
              title: 'Venkat211',
              tooltip: 'Alert',
              imageSource: active,
              data: [
                {
                  title: 'Venkat211',
                  tooltip: 'Alert',
                  imageSource: active,
                  data: [],
                },
              ],
            },
            {
              title: 'Venkat212',
              tooltip: 'Alert',
              imageSource: active,
              data: [],
            },
          ],
        },
      ],
    },
  ])

  return <Tree data={data} isMobile={false} />
}

export default App
