import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/login'
import Signup from './Components/Signup';
import HomePage from './Components/Homepage';
import {Tiles} from './Components/Tiles';
import MainContent from './Components/Shop/MainContent/MainContent';
function App() {
  // let ele=["../ProductImages/Product1.jpg","Blue crop top","Blue crop top by Divore",1500,50,4.5];
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Shop' element={<MainContent/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>   
      </Routes>
    </BrowserRouter>
    {/* <Tiles Name={"Blue top"} Description={"Blue crop top by Divore"} Pricing={1500} Discount={50} Review={4.5}/> */}
    </div>
  );
}

export default App;
