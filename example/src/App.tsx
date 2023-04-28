import React, { useState } from 'react'
import { Tree } from 'react-matrix-tree'
import { Arrayvalues, FourMatrix, MixedMatrix, OneMatrix, ThreeMatrix, TwoMatrix } from './matrixdata'
function App() {
  const [data, setData] = useState<Array<Arrayvalues>>(OneMatrix)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <button onClick={() => setData(OneMatrix)}>One Matrix</button>
        <button onClick={() => setData(TwoMatrix)}>Two Matrix</button>
        <button onClick={() => setData(ThreeMatrix)}>Three Matrix</button>
        <button onClick={() => setData(FourMatrix)}>Four Matrix</button>
        <button onClick={() => setData(MixedMatrix)}>Mixed Matrix</button>
      </div>
      <Tree color='red' data={data} isMobile={false} />
    </div>
  )
}

export default App
