import {createRootRoute } from '@tanstack/react-router'
import Login from '../features/auth/login'
export const Route = createRootRoute({
  component: ()=><Login/>,
})


