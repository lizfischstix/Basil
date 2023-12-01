import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Overview from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Category from './pages/Category.jsx';
import Dateview from './pages/Dateview.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Overview />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },{
        path: '/category',
        element: <Category />
      },{
        path: '/date',
        element: <Dateview />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
