import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import itemdata from '../Data/Items.json'
const Navbar=()=>{
    return(
        <>
        <nav className='flex sticky bg-[#F1F3F2] top-0 z-[1010] h-[12vh] max-h-[200px] w-full items-center justify-between font-Montserrat font-bold'>
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
            <div className="searchbar">
            <SearchBar data={itemdata}/>
            </div>
            <div className="grid grid-flow-col gap-20px text-center font-[500] text-[1.6rem] font-Montserrat text-[#464646] w-[18vw] min-w-[200px]" style={{
                gridTemplateColumns:"33% 33% 33%",
                gridTemplateRows:"6vh 2vh",
            }}>
                <img src={require("../Images/person.png")} alt="profile" className='m-auto w-[4vw] max-w-[40px]'/>
                <p className='Nav-text'><strong>Profile</strong></p>
                <img src={require("../Images/wishlist.png")} alt="wishlist" className='m-auto w-[4vw] max-w-[40px]'/>
                <p className='Nav-text'><strong>Wishlist</strong></p>
                <img src={require("../Images/bag.png")} alt="bag" className='m-auto w-[4vw] max-w-[35px]'/>
                <p className='Nav-text'><strong>Bag</strong></p>
            </div>
        </nav>
        </>
    )
}
export default Navbar;