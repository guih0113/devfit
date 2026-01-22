import { createBrowserRouter } from 'react-router'
import { DietForm } from './app/diet-form'
import { Home } from './app/home'
import { Layout } from './app/layout'
import { TrainingForm } from './app/training-form'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/diet-form', element: <DietForm /> },
      { path: '/training-form', element: <TrainingForm /> }
    ]
  }
])
