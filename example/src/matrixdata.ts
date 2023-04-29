import active from './active.png'

enum Tooltiptype {
  HTML,
  TEXT,
}
export type Arrayvalues = {
  imageSource?: string
  title: string
  tooltip?: string
  tooltiptype?: Tooltiptype
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>, item: Arrayvalues) => void
  data?: Array<Arrayvalues>
}
export const OneMatrix: Array<Arrayvalues> = [
  {
    title: 'Title1',
    tooltip: 'Alert',
    imageSource: active,
    onClick: () => {
      alert('Testing Success')
    },
    data: [
      {
        title: 'Title11',
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
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const TwoMatrix: Array<Arrayvalues> = [
  {
    title: 'Title1',
    tooltip: 'Alert',
    imageSource: active,
    data: [
      {
        title: 'Title11',
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
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
    ],
  },
]

export const ThreeMatrix: Array<Arrayvalues> = [
  {
    title: 'Title1',
    tooltip: 'Alert',
    imageSource: active,
    data: [
      {
        title: 'Title11',
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
          {
            title: 'Add',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
    ],
  },
]

export const FourMatrix: Array<Arrayvalues> = [
  {
    title: 'Title1',
    tooltip: 'Alert',
    imageSource: active,
    data: [
      {
        title: 'Title11',
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
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
    ],
  },
]

export const MixedMatrix = [
  {
    title: 'Title1',
    tooltip: 'Alert',
    imageSource: active,
    data: [
      {
        title: 'Title11',
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
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
      {
        title: 'Title21',
        tooltip: 'Alert',
        imageSource: active,
        data: [
          {
            title: 'Title211',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
          {
            title: 'Title212',
            tooltip: 'Alert',
            imageSource: active,
            data: [],
          },
        ],
      },
    ],
  },
]
