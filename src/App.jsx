import React from 'react'
import Head from './Components/Header/Head'
import Content from './Components/Content/Content'
import "../src/app.css"
import Order from './Components/Order/Order'
import Slide from './Components/Slides/Slide'

function App() {
  return (
    <div className='side-adj'>
    <div id="bg-overing-all"></div>
      <Head/>
      <Content/>
      <Order/>
      <Slide/>
      </div>
  
  )
}

export default App