import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter } from 'react-router'
import Root from './components/root/Root.jsx'
import { RouterProvider } from 'react-router/dom'
import ErrorPage from './components/Errorpage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Gadget from './components/Gadget/Gadget.jsx'
import ExploreGadget from './components/ExploreGadget/ExploreGadget.jsx'
import { element } from 'prop-types'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'


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
        path: 'product/:productID',
        element: <ProductDetails></ProductDetails>,
      }, 
      {
        path: '/category/:category/product/:productID',
        element: <ProductDetails></ProductDetails>,
      }, 
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: ()=>fetch('./product.json'),
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
