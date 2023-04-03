import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <>
            <div class="page flex justify-center items-center h-screen"
        style={{background:" url('./bg.jpeg') no-repeat center center/cover;"}}>

        <div id="formdiv"
            class="drop-shadow-2xl flex flex-col justify-center items-center w-[22rem] h-[35rem] sm:w-[25rem] md:w-[28rem] lg:w-[32rem]  rounded-[35px] bg-gray-100">

            <img src={require("./logo.jpg" )} alt="pRe-Love"
                class="w-24 h-24 rounded-[40%] sm:w-26 sm:h-26 lg:w-35 lg:h-35 p-1 mt-2 -mb-1"/>
            <h1 class="my-2   text-[2rem] lg:text-[2.5rem]">Login</h1>

            <form action="/backend.js" name="form" id="form" onsubmit="return validateForm()"
                class="mr-20 lg:mr-32 flex flex-col relative bottom-5">

                <input type="text" name="username" id="username" placeholder="Username"
                    class="text-xs sm:text-sm md:text-md px-2 py-1 ml-2 border-b-2  border-b-gray-400 m-4 h-8 w-[130%] lg:w-[150%] hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
                    required/>

                <input type="password" name="password" id="password" placeholder="Enter Password"
                    class="text-xs sm:text-sm md:text-md px-2 py-1 ml-2 border-b-2 border-b-gray-400 w-[130%] lg:w-[150%] m-4 h-8 hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
                    required/>

                <a href="/forgot" class="text-blue-500   text-xs relative left-3 inline">Forgot Password?</a>

                <button type="submit"
                    class="m-5 mb-7 w-1/2 px-4 pt-1 pb-2 outline-none shadow-md shadow-gray-500 cursor-pointer relative left-14 lg:left-20 rounded-xl hover:scale-110 transition-transform duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login</button>
            </form>

            <hr class="border-2 border-gray-200 w-[80%] relative bottom-8"/>
            <p class="text-xs relative bottom-6">Don't have an account? <Link to='/Signup'
                    class="text-blue-500">Sign Up</Link> </p>
        </div>
    </div>
        </>
    )
}
export default Login;