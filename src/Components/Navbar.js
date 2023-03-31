import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
        <nav className='flex sticky bg-white top-0 right-0 bottom-0 z-[1010] content-center h-[70px] w-[100%] justify-between drop-shadow-lg shadow-lg '>
            <div className='w-[150px] flex justify-around'>
            <a href="/">
                <img src={require("./logo.jpg")} alt="/" className='w-[100px] h-[100px] rounded-[40px]' />
            </a>
            </div>
            <ul className='flex content-center items-center text-[22px] font-normal font-Alkatra'>
                <li className='list-none m-2 p-2 w-[100px] hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">Home</Link></li>
                <li className='list-none m-2 p-2 w-[100px] hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Shop">Shop</Link></li>
                <li className='list-none m-2 p-2 w-[150px] hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">NewsLetter</Link></li>
                <li className='list-none m-2 p-2 w-[100px] hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/">Contact</Link></li>
                <li className='list-none m-2 p-2 w-[150px] hover:border-b-2 hover:border-[#754d10] ease-in-out duration-[0.1s]'><Link to="/Login">Login/Signup</Link></li>
            </ul>
            <div className="flex content-center align-middle flex-wrap mr-4">
            <svg style={{width:"40px", height:"40px",}} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#79787d" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"></path></g></svg>
            </div>
        </nav>
        </>
    )
}
export default Navbar;