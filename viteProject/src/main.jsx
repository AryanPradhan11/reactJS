import React from 'react'
import ReactDOM from 'react-dom/client'
import name from './aryan'

//Head out to custome_react.js from 01basicapp for example
// function MyApp() {
//   return(
//     <div>
//       <h1>
//         Custom App
//       </h1>
//     </div>
//   )
// }
//React will convert this into a tree, just like customRender var in custom_react.js

//Copying custom tree structure
// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const element = (
//   <a href='https://youtube.com' target='_blank'>Visit Youtube</a>
// )

// const reactElement = React.createElement(
//   'a', //tags
//   {href: 'https://github.com', target: '_blank'},
//   'click me'
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   //StrictMode checks for potential problems
//   //<React.StrictMode> 
//     //{/** This is the only correct way to comment inside the StrictMode */}
//     //{/**MyApp tag is merely a component of MyApp() function above, it maintains the React life cycle */}
//     //<MyApp/> 
//   //</React.StrictMode>
//   reactElement
// )
//The other way to render is to call the function directly.
//This way StrictMode is not required, you can call a function and render it directly

const main = document.getElementById('root')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main/>
  </React.StrictMode>
)