# React-Matrix-Tree

React-matrix-tree allows you to create tree view with different types of matrix.

## Installation

```
$ npm install --save react-matrix-tree
$ yarn add react-matrix-tree
```

## Features

- Easy to set up for real, you can make it work in less than 1minute!
- Super easy to customize
- Can choose matrix type
- Can display a html content as tooltip
- Has `onClick` hooks. Can pass onclick event when user interact
- Display information using `tooltip` When user hovers on.
- You can display dynamic image using `imageSource`.
- For Responsive design you have to pass a prop `isMobile`.
- And much more !

## The gist

```jsx
import React from 'react'

import { Tree } from 'react-matrix-tree'

function App() {
  const data = [{ title: 'Too Easy' }]

  return (
    <div>
      <Tree color='red' data={data} isMobile={false} />
    </div>
  )
}
```

## Demo

[A demo is worth a thousand words](https://venkatmcajj.github.io/react-matrix-tree/example)

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

## License

Licensed under MIT
