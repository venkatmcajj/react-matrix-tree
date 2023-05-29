import React, { useState } from 'react'
import { Tree } from 'react-matrix-tree'
import { Arrayvalues, FourMatrix, MixedMatrix, OneMatrix, ThreeMatrix, TwoMatrix } from './matrixdata'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-matrix-tree/dist/react-matrix-tree.css'
function App() {
  const [data, setData] = useState<Array<Arrayvalues>>(OneMatrix)
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-body' style={{ overflowY: 'auto', height: '100%' }}>
          <div className='d-flex mb-2 justify-content-center'>
            <button className='btn btn-primary' onClick={() => setData(OneMatrix)}>
              One Matrix
            </button>
            <button className='btn btn-primary' onClick={() => setData(TwoMatrix)}>
              Two Matrix
            </button>
            <button className='btn btn-primary' onClick={() => setData(ThreeMatrix)}>
              Three Matrix
            </button>
            <button className='btn btn-primary' onClick={() => setData(FourMatrix)}>
              Four Matrix
            </button>
            <button className='btn btn-primary' onClick={() => setData(MixedMatrix)}>
              Mixed Matrix
            </button>
          </div>
          <div className='treecontainer' style={{ overflowY: 'auto', height: '100%' }}>
            <Tree color='red' data={data} isMobile={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
