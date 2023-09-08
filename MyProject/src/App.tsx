import React from 'react'
import { RouterProvider } from 'react-router'
import routes from './router'




const App = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
