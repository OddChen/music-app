import { useState } from 'react'
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import { RouterProvider } from 'react-router'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
