import { createBrowserRouter } from 'react-router'
import { Home } from './app/home'
import { Layout } from './app/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/diet-form', element: <div>Formulário de dieta</div> },
      { path: '/training-form', element: <div>Formulário de treino</div> }
    ]
  }
])
