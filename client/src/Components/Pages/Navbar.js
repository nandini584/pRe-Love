import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import itemdata from '../Data/Items.json'
import ImageText from './ImageText';
import HomeImage from '../Images/home.svg'
import CartImage from '../Images/cart.svg'
import FAQsImage from '../Images/question-circle.svg'
import ProfileImage from '../Images/ProfileIcon.svg'

const Navbar=()=>{
    return(
        <>
        <nav className='sticky hidden md:flex bg-[#F1F3F2] top-0 z-[1010] h-[12vh] max-h-[200px] w-full items-center justify-between font-Montserrat font-bold'>
            <Link to="/">
                <img src={require("../Images/logo.png")} alt="logo" className='h-[12vh] w-auto'/>
            </Link>
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
            <div className="flex gap-20px text-center font-[500] text-[1.6rem] font-Montserrat text-[#464646] w-[18vw] min-w-[200px] justify-around">
                <Link to="/profileview"><ImageText image={"person.png"} alternate={"avatar"} text={"Profile"}></ImageText></Link>
                <ImageText image={"wishlist.png"} alternate={"wishlist"} text={"wishlist"}></ImageText>
                <ImageText image={"bag.png"} alternate={"bag"} text={"cart"}></ImageText>
                
                {/* <Link>
                    <img src={require("../Images/person.png")} alt="profile" className='m-auto w-[4vw] max-w-[40px]'/>
                    <p className='Nav-text'><strong>Profile</strong></p>
                </Link>
                
                <img src={require("../Images/wishlist.png")} alt="wishlist" className='m-auto w-[4vw] max-w-[40px]'/>
                <p className='Nav-text'><strong>Wishlist</strong></p>
                <img src={require("../Images/bag.png")} alt="bag" className='m-auto w-[4vw] max-w-[35px]'/>
                <p className='Nav-text'><strong>Bag</strong></p> */}
            </div>
        </nav>

        <nav className='fixed bottom-0 z-[2000] flex md:hidden justify-around bg-[#9DAC93] h-[clamp(50px,10vh,100px)] w-full p-[clamp(10px,2vh,20px)]'>
                <Link to='/'><img src={HomeImage} alt="" /></Link>
                <Link to='/profileview'><img src={ProfileImage} alt="" className='w-[30px] text-white' /></Link>
                <Link to='/shop'><img src={CartImage} alt="" /></Link>
                <Link to='/FAQ'><img src={FAQsImage} alt="" /></Link>
        </nav>
        </>
    )
}
export default Navbar;