import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { loadUser } from './Components/actions/userActions';

/*importing all the pages of the website*/ 
import ProfileView from './Components/User features/profileView';
import ProfileUpdate from './Components/User features/profileUpdate';
import HomePage from './Components/Pages/Homepage';
import PageNotFound from './Components/Pages/PageNotFound';
import ResetPassword from './Components/User features/resetPassword';
import FAQs from './Components/CustomerCare/FAQs';
import Privacypolicy from './Components/CustomerCare/Privacypolicy';
import Termsofuse from './Components/CustomerCare/Termsofuse';
import Home from './Components/Ecommerce/Home';
import Wishlist from './Components/Ecommerce/Wishlist';
import Bag from './Components/Ecommerce/Bag';
import LoadingPage from './Components/Loading Page/LoadingPage';
import ProductPage from './Components/Ecommerce/ProductPage';
import SearchResults from './Components/Ecommerce/SearchResults';
import Login from './Components/User features/login.jsx';
import Register from './Components/User features/Register';
import store from './Components/Store/store_redux'
import UpdatePassword from './Components/User features/updatePassword';
import ProtectedRoute from './ProtectedRoutes'
import ForgotPassword from './Components/User features/ForgotPassword';
import Female from './Components/Ecommerce/Genderpage/Female';
import Male from './Components/Ecommerce/Genderpage/Male';
import Productdetails from './Components/Ecommerce/Productdetails';
function App() {
useEffect(()=>{
  store.dispatch(loadUser())
},[])
  return (
    <div className="App bg-[#F5F5F5]">
      {/* <UpdatePassword/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/loading' element={<LoadingPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          
          {/*all the user login and profile routes */}
          <Route path='/login' element={<Login/>}/>{/*to add protection  */}
          <Route path='/register' element={<Register/>}/>{/*to add protection  */}
          <Route path='/profileview' element={<ProtectedRoute><ProfileView /></ProtectedRoute>}/>
          <Route path='/profile/update' element={<ProtectedRoute><ProfileUpdate /></ProtectedRoute>}/>
          <Route path='/password/update' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}/>
          <Route path='/password/forgot' element={<ForgotPassword />}/>
          <Route path='/password/reset/:token'  element={<ResetPassword />}/>

          <Route path='/ecommerce' element={<Home />}/>
          <Route path='/ecommerce/faqs' element={<FAQs />}/>
          <Route path='/ecommerce/privacypolicy' element={<Privacypolicy />}/>
          <Route path='/ecommerce/termsofuse' element={<Termsofuse />}/>
          <Route path='/profileView/bag' element={<ProtectedRoute><Bag /></ProtectedRoute>} />
          <Route path='/profileView/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
          <Route path='/products'  element={<SearchResults/>}/>
          <Route path='/products/:keyword'  element={<SearchResults/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/shop/female' element={<Female/>}/>
          <Route path='/shop/male' element={<Male/>}/>
          <Route path='/searchresults' element={<Productdetails/>}/>

          <Route path='*' element={<PageNotFound/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
