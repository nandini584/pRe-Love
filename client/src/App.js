import './App.css';
import {BrowserRouter, createBrowserRouter ,Route,RouterProvider, Routes} from 'react-router-dom';
import { AuthorizeUser } from './middlewares/auth';


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
import Username from './Components/Pages/Username';
import ProfileView from './Components/Pages/ProfileView';
import FAQs from './Components/CustomerCare/FAQs';
import Privacypolicy from './Components/CustomerCare/Privacypolicy';
import Termsofuse from './Components/CustomerCare/Termsofuse';
import Home from './Components/Ecommerce/Home';
import Wishlist from './Components/Ecommerce/Wishlist';
import Bag from './Components/Ecommerce/Bag';
function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<HomePage/>
  //   },   {
  //     path:"/login",
  //     element:<Login/>
  //   },
  //   {
  //     path:"/shop",
  //     element:<MainContent/>
  //   },
  //   {
  //     path: '/profile',
  //     element: <Profile/>
  //   },
  //   {
  //     path:"/register",
  //     element:<Register/>
  //   },
  //   {
  //     path : '/recover',
  //     element : <Recover/>
  //   },
  //   {
  //     path : '/reset',
  //     element : <ResetPassword/>
  //   },
  //   {
  //     path:"*",
  //     element:<PageNotFound/>
  //   },
  // ])
  return (
    <div className="App bg-[#F5F5F5]">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<MainContent/>}/>
          <Route path='/profile' element={<AuthorizeUser><Profile/></AuthorizeUser>}/>
          <Route path='/profileView' element={<AuthorizeUser><ProfileView/></AuthorizeUser>} />
          <Route path='/profileView/wishlist' element={<Wishlist />} />
          <Route path='/profileView/bag' element={<Bag />} />
          <Route path='/recover' element={<AuthorizeUser><Recover/></AuthorizeUser>}/>
          <Route path='/reset' element={<AuthorizeUser><ResetPassword/></AuthorizeUser>}/>
          <Route path='/username' element={<Username/>}/>
          <Route path='/ecommerce/faqs' element={<FAQs />}/>
          <Route path='/ecommerce/privacypolicy' element={<Privacypolicy />}/>
          <Route path='/ecommerce/termsofuse' element={<Termsofuse />}/>
          <Route path='/ecommerce' element={<Home />}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
