import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css';
import '@fontsource/lobster-two';
import '@fontsource/andika';
import App from './App';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Overview from "./pages/Overview";
import Income from "./pages/Income";
import UpdateIncome from "./pages/UpdateIncome";
import Expense from './pages/Expense.jsx';
import Transaction from './pages/TransactionList.jsx';
import UpdateExpense from './pages/UpdateExpense.jsx';
import GraphPage from './pages/GraphPage.jsx'; 
import About from './pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/income/:incomeId/update",
        element: <UpdateIncome />,
      },
      {
        path: "/expense/:expenseId/update",
        element: <UpdateExpense />,
      },
      {
        path: "/transaction",
        element: <Transaction />
      },
      {
        path: "/graphpage",
        element: <GraphPage />
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
