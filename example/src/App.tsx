import React from 'react'
import active from './active.png'
import { Tree } from 'react-matrix-tree'
function App() {
  const data = [
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
  ]

  return <Tree color='red' data={data} isMobile={false} />
}

export default App
