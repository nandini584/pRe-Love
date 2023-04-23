import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="page flex justify-center items-center h-screen font-Ubuntu">
        <div
          id="formdiv"
          className="drop-shadow-2xl flex flex-col justify-center items-center w-[23rem] md:w-[28rem] lg:w-[32rem]  rounded-[35px] bg-gray-100 "
        >
          <img
            src={require("./logo.png")}
            alt="pRe-Love"
            className="w-24 h-24 rounded-[40%] sm:w-26 sm:h-26 lg:w-35 lg:h-35 p-1 mt-2 -mb-1 "
          />
          <h1 className="my-2   text-[2rem] lg:text-[2.5rem]">Sign up</h1>

          <form
            action="/backend.js"
            name="form"
            id="form"
            className="form  flex flex-col relative bottom-5 w-[280px] md:w-[300px] lg:w-[350px]"
            method="post"
            // onSubmit={`return ${validateForm()}`}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 border-b-2 border-b-gray-400 w-full m-4 h-8  hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
              required
            />
            <div className="formError ml-3 text-[0.65rem] -mt-4 text-red-500 "></div>

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 border-b-2  border-b-gray-400 m-4 h-8 w-full hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100 "
              required
            />
            <div className="formError ml-3 -mt-4 text-[0.65rem] text-red-500 "></div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 border-b-2 border-b-gray-400 w-full m-4 h-8 hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
              required
            />
            <div className="formError ml-3 -mt-4 text-[0.65rem] text-red-500 "></div>

            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Mobile No."
              className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 border-b-2 border-b-gray-400 w-full m-4 h-8 hover:border-b-2 hover:border-b-blue-700 focus:outline-none focus:border-blue-700 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md focus:rounded-md bg-gray-100  "
              required
            />
            <div className="formError ml-3 -mt-4 text-xs text-red-500 "></div>

            <div className="pwd flex items-center border-b-2 border-b-gray-400 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md hover:border-b-blue-700">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create Password"
                className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 mb-0 pb-0 border-b-2 m-4 h-8 w-[100%] focus:outline-none bg-gray-100 "
                required
              />
              <i
                className="fas fa-eye-slash text-lg relative top-2 right-2 z-10"
                id="eye1" 
              ></i>
            </div>
            <div className="formError ml-3 text-[0.65rem] text-red-500"></div>

            <div className="pwd flex items-center border-b-2 border-b-gray-400 focus:bg-blue-100 transition-colors duration-500 hover:rounded-md hover:border-b-blue-700 relative mt-1">
              <input
                type="password"
                name="cpwd"
                id="cpwd"
                placeholder="Confirm Password"
                className="text-xs sm:text-sm md:text-md px-2 py-1 ml-0 mb-0 pb-0 border-b-2 m-4 h-8 w-[100%] focus:outline-none bg-gray-100 "
                required
              />
              <i
                className="fas fa-eye-slash text-lg relative top-2 right-2 z-10"
                id="eye2"
              ></i>
            </div>
            <div className="formError ml-3 text-[0.65rem] text-red-500 "></div>

            <div id="checkbox" className="mt-6">
              <span id="alert" className="m-1 -pr-2 rounded-md">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="w-5 m-0 relative left-[1.5px] top-[0.5px]"
                />
              </span>
              <span className="text-xs">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-500 underline">
                  Terms and Conditions
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="m-5 mb-7 w-[150px] px-4 pt-1 pb-2 outline-none shadow-md shadow-gray-500 cursor-pointer relative left-14 lg:left-20 rounded-xl hover:scale-110 transition-transform duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            >
              Sign Up
            </button>
          </form>

          <hr className="border-2 border-gray-200 w-[80%] relative bottom-8" />
          <p className="text-xs relative bottom-6">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-500  ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;
