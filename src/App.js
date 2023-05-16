import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Main from './layout/Main';
import Home from './pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },



  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
