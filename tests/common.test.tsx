import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import 'jest-canvas-mock'

import { Tree } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Tree color='#6a0136' data={[{ title: 'Message' }]} isMobile={false} />)
  })
})
