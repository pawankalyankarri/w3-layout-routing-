import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  NotFound from './components/NotFound.tsx'


import TutorialRoutesArr from './components/routeconfiguration/TutorialRoutes.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <NotFound/> ,
    children : TutorialRoutesArr.map(route=>route)
    
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
