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

## The properties

Properties used to customise the rendering:

| Name     | Type    | Description                       |
| -------- | ------- | --------------------------------- |
| color    | String  | Arrow color of parent to child    |
| data     | Array   | used to renders a tree view       |
| isMobile | Boolean | Used you to manage responsiveness |

## data Properties

| Name        | Type   | Description                                                                                                                                           |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | String | Tree title                                                                                                                                            |
| imageSource | String | _optional_ display's a image                                                                                                                          |
| tooltip     | String | _optional_ Displays a given content when user hovers on title                                                                                         |
| onClick     | func   | _optional_ Calls the given function when user clicks on title and pass two parameters, first one is click event and second is the object of tree prop |
| data        | Array  | _optional_ Child's array                                                                                                                              |

## Demo

[A demo is worth a thousand words](https://venkatmcajj.github.io/react-matrix-tree/example)

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

## License

Licensed under MIT
