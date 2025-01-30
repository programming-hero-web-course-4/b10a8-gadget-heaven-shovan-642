import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Root from './components/root/Root.jsx'
import { RouterProvider } from 'react-router/dom'
import ErrorPage from './components/Errorpage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Gadget from './components/Gadget/Gadget.jsx'
import ExploreGadget from './components/ExploreGadget/ExploreGadget.jsx'
import { element } from 'prop-types'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/', 
            element: <Gadget></Gadget>
          },
          {
            path: '/category/:category', 
            element: <Gadget></Gadget>
          },
      ]
      }, 
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: "exploreGadget",
        element: <ExploreGadget></ExploreGadget>,
      },
    ]
    
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
</StrictMode>,
)
