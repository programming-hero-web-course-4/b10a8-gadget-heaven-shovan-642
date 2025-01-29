import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Root from './components/root/Root.jsx'
import { RouterProvider } from 'react-router/dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
</StrictMode>,
)
