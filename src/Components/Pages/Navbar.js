import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import itemdata from '../Items.json'
const Navbar=()=>{
    return(
        <>
        <nav className='flex sticky bg-[#F1F3F2] top-0 z-[1010] h-[12vh] w-[100vw] items-center justify-between font-Montserrat font-bold'>
            {/* <Link to="/"> */}
                <img src={require("../Images/logo.png")} alt="logo" className='h-[12vh] w-auto'/>
            {/* </Link> */}
            {/* <ul className='flex content-center items-center text-[3rem] font-normal font-Alkatra'>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">H</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Shop">S</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">N</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">C</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Login">L</Link></li>
            </ul> */} 
            <SearchBar data={itemdata}/>
            <div className="grid grid-flow-col text-center font-[500] text-[1.6rem] font-Montserrat text-[#464646]" style={{
                gridTemplateColumns:"5.1vw 5.1vw 5.1vw",
                gridTemplateRows:"6vh 2vh",
            }}>
                <img src={require("../Images/person.png")} alt="profile" className='m-auto'/>
                <p><strong>Profile</strong></p>
                <img src={require("../Images/wishlist.png")} alt="wishlist" className='m-auto'/>
                <p><strong>Wishlist</strong></p>
                <img src={require("../Images/bag.png")} alt="bag" className='m-auto'/>
                <p><strong>Bag</strong></p>
            </div>
        </nav>
        </>
    )
}
export default Navbar;