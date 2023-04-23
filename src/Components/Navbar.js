import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import itemdata from './Items.json'
const Navbar=()=>{
    return(
        <>
        <nav className='flex sticky bg-[#F1F3F2] top-0 z-[1010] h-[138px] w-[100%] items-center justify-between font-Montserrat font-bold'>
            <div className='w-[150px]'>
            <Link to="/">
                <img src={require("./logo.png")} alt="logo" className='w-[133px] h-[114px]' />
            </Link>
            </div>
            {/* <ul className='flex content-center items-center text-[30px] font-normal font-Alkatra'>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">H</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Shop">S</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">N</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">C</Link></li>
                <li className='list-none m-2 p-2 w-fit hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Login">L</Link></li>
            </ul> */}
            <SearchBar data={itemdata}/>
            <div className="grid grid-flow-col flex-wrap items-center justify-center" style={{
                gridTemplateColumns:"100px 100px 100px",
                gridTemplateRows:"40px 20px"
            }}>
                <img src={require("./Images/person.png")} alt="profile"/>
                <span><strong>Profile</strong></span>
                <img src={require("./Images/wishlist.png")} alt="wishlist"/>
                <strong>Wishlist</strong>
                <img src={require("./Images/bag.png")} alt="bag"/>
                <strong>Bag</strong>
            </div>
        </nav>
        </>
    )
}
export default Navbar;