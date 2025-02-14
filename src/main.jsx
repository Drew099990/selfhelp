import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelfHelp from './selfHelp'
import HomeSelf from './selfHelp/home';
import Community from './selfHelp/community';
import CommunityBody from './selfHelp/communityBody';

const router = createBrowserRouter([{path:"/",element:<SelfHelp/>},
  {path:"/home",element:<HomeSelf/>},
  {path:"/community",element:<Community/>},
  {path:"/c-body",element:<CommunityBody/>}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
