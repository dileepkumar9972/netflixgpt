import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ImageSlider from './ImageSlider'


const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>

        {/* <ImageSlider/> */}
        <RouterProvider router={appRouter}/>
          
    </div>
  )
}

export default Body