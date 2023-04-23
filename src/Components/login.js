import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <>
        <div className="page flex justify-center items-center h-screen font-Ubunt">

        <div id="formdiv"
            className="drop-shadow-2xl flex flex-col justify-center items-center w-[23rem] md:w-[28rem] lg:w-[32rem]  rounded-[35px] bg-gray-100 ">

            <img src={require("./logo.png" )} alt="pRe-Love"
                className="w-24 h-24 rounded-[40%] sm:w-26 sm:h-26 lg:w-35 lg:h-35 p-1 mt-2 -mb-1"/>
            <h1 className="my-2   text-[2rem] lg:text-[2.5rem]">Login</h1>

            <form action="/backend.js" name="form" id="form"
                className="form  flex flex-col relative bottom-5 w-[280px] md:w-[300px] lg:w-[350px]" method="post" 
                // onSubmit={`return ${validateForm()}`}>
                >

                <input type="text" name="username" id="username" placeholder="Username"
                    className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 border-b-2 border-b-gray-400 w-full m-4 h-8 mt-6 hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
                    required/>

                <div className="pwd flex items-center border-b-2 border-b-gray-400 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md hover:border-b-blue-700">
                <input type="password" name="password" id="password" placeholder="Enter Password"
                    className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 mb-0 pb-0 border-b-2 m-4 h-8 w-[100%] focus:outline-none bg-gray-100 "
                    required/>
                <i className="fas fa-eye-slash text-lg relative top-2 right-2 z-10" id="eye"></i></div>

                <Link to="/forgot" className="text-blue-600 text-xs relative left-3 inline mt-2">Forgot Password?</Link>

                <button type="submit"
                className="m-5 mb-7 w-[150px] px-4 pt-1 pb-2 outline-none shadow-md shadow-gray-500 cursor-pointer relative left-14 lg:left-20 rounded-xl hover:scale-110 transition-transform duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login</button>
            </form>

            <hr className="border-2 border-gray-200 w-[80%] relative bottom-8"/>
            <p className="text-xs relative bottom-6">Don't have an account? <Link to="/Signup"
                    className="text-blue-500  ">Sign Up</Link> </p>
        </div>
    </div>
        </>
    )
}
export default Login;