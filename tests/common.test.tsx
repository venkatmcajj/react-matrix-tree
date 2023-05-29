import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-canvas-mock'
import '@testing-library/jest-dom'
import { Tree } from '../src'
import MainView from '../src/components/MainView'
import ChildView from '../src/components/ChildView'

describe('Common render', () => {
  it('Tree renders without crashing', () => {
    render(<Tree color='#6a0136' data={[{ title: 'Message' }]} isMobile={false} />)
  })
})
describe('Child View Render', () => {
  it('Child view render check mobileview', () => {
    const { getAllByText } = render(
      <ChildView
        item={{
          title: 'Test',
          onClick: (e) => {
            e.currentTarget.innerHTML = 'Testing After Click'
          },
          data: [
            {
              title: 'Test',
              data: [
                { title: 'Test', data: [{ title: 'Test', data: [{ title: 'Test', data: [{ title: 'Test' }] }] }] },
              ],
            },
          ],
        }}
        ismobileview={true}
        level={1}
        color='red'
      />,
    )
    expect(getAllByText(/Test/i).length).toBe(3)
  })
})
describe('Child view desktop', () => {
  it('Child view render check desktopview', () => {
    const { getAllByText } = render(
      <ChildView
        item={{
          title: 'Test',
          onClick: (e) => {
            e.currentTarget.innerHTML = 'Testing After Click'
          },
          data: [
            {
              title: 'Title1',
              tooltip: 'Alert',

              data: [
                {
                  title: 'Title11',
                  tooltip: 'Alert',

                  data: [
                    {
                      title: 'Add',
                      tooltip: 'Alert',

                      data: [
                        {
                          title: 'Add',
                          tooltip: 'Alert',

                          data: [
                            {
                              title: 'Add',
                              tooltip: 'Alert',

                              data: [
                                {
                                  title: 'Add',
                                  tooltip: 'Alert',

                                  data: [],
                                },
                                {
                                  title: 'Add',
                                  tooltip: 'Alert',

                                  data: [],
                                },
                              ],
                            },
                            {
                              title: 'Add',
                              tooltip: 'Alert',

                              data: [],
                            },
                          ],
                        },
                        {
                          title: 'Add',
                          tooltip: 'Alert',

                          data: [],
                        },
                      ],
                    },
                    {
                      title: 'Add',
                      tooltip: 'Alert',

                      data: [],
                    },
                  ],
                },
                {
                  title: 'Title21',
                  tooltip: 'Alert',

                  data: [
                    {
                      title: 'Title211',
                      tooltip: 'Alert',

                      data: [],
                    },
                    {
                      title: 'Title212',
                      tooltip: 'Alert',

                      data: [],
                    },
                  ],
                },
              ],
            },
          ],
        }}
        ismobileview={false}
        level={1}
        color='red'
      />,
    )
    expect(getAllByText(/Add/i).length).toBe(4)
  })
})
describe('Main View render', () => {
  it('Main view changes test after click event', () => {
    const { getByText } = render(
      <MainView
        data={{
          title: 'Test',
          onClick: (e) => {
            e.currentTarget.innerHTML = 'Testing After Click'
          },
        }}
      />,
    )
    fireEvent.click(getByText(/Test/i))
    expect(getByText(/Testing/i)).toBeInTheDocument()
  })
})
