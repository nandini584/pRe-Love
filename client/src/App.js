import './App.css';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';


/*importing all the pages of the website*/ 
import Navbar from './Components/Pages/Navbar';
import Login from './Components/Pages/Login'
import HomePage from './Components/Pages/Homepage';
import MainContent from './Components/Shop/MainContent/MainContent';
import Register from './Components/Pages/Register';
import PageNotFound from './Components/Pages/PageNotFound';
import Recover from './Components/Pages/Recover'
import ResetPassword from './Components/Pages/ResetPassword';
import Profile from  './Components/Pages/profile'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },   {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/shop",
      element:<MainContent/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path : '/recover',
      element : <Recover/>
    },
    {
      path : '/reset',
      element : <ResetPassword/>
    },
    {
      path:"*",
      element:<PageNotFound/>
    },
  ])
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
