import Footer from "../Commoncomponents/footer";
import TestimonialBox from "../Commoncomponents/TestimonialBox"
import Testimonials from "../Data/Testimonials.json"
import Stories from "../Data/Stories.json"
import StoriesBox from "../Commoncomponents/StoriesBox";
import Navbar from "./Navbar";
const HomePage=()=>{
    return(
        <>
        <Navbar/>
        {/* first 2 images */}
        <div className="flex">
            <div className="flex items-center flex-col justify-center w-[calc(50%-5px)] h-[70vh] max-h-[488px] bg1 text-white font-Montserrat">
                    <h3 className="text-[3.2rem] lg:text-[4.8rem]">pRe Loved Fashion</h3>
                    <h6 className="text-[2.2rem] lg:text-[3.2rem]">fashion in a loop</h6>
                    <button className="border-2 border-white w-[30vw] p-[10px] max-w-[288px] text-[2.2rem] lg:text-[3.2rem] font-sans rounded-[7px] mt-[70px]">Shop Now</button>
            </div>
            <div className="flex items-center flex-col justify-center w-[calc(50%-5px)] h-[70vh] max-h-[488px] bg2 text-white font-Montserrat" >
                    <h3 className="text-[3.2rem] lg:text-[4.8rem]">Eco Fashion</h3>
                    <h6 className="text-[2.2rem] lg:text-[3.2rem]">fashion for the planet</h6>
                    <button className="border-2 border-white w-[30vw] p-[10px] max-w-[288px] text-[2.2rem] lg:text-[3.2rem] font-sans rounded-[7px] mt-[70px]">Coming Soon</button>
                    
            </div>
        </div>

        <div className="w-[100%] h-[32px] bg-[#A7B99D] mb-[40px]"></div>




        {/* why pre love */}

        <div className="w-[100%] bg-[#B4C7A8] flex flex-col text-center font-Montserrat text-white text-[1.4rem] md:text-[2.2rem] mb-[10vh]  max-mb-[70px]">
            <h2 className="text-[3.4rem] mb-[30px] md:text-[5.4rem]">Why pRe Love</h2>
            <div className="grid" style={{
                gridTemplateColumns:"25% 25% 25% 25%",
            }}> 
            <img src={require("../Images/Money.png")} alt="Affordability" className="m-auto w-[10vw] max-w-[100px]"/>
            <img src={require("../Images/Earth.png")} alt="Sustainablity" className="m-auto w-[10vw] max-w-[100px]"/>
            <img src={require("../Images/shirt.png")} alt="shirt" className="m-auto w-[10vw] max-w-[100px]"/>
            <img src={require("../Images/heart-handshake.png")} alt="Accessibility" className="m-auto w-[10vw] max-w-[100px]"/>
            <p>Affordablity</p>
            <p>Sustainablity</p>
            <p>One of a kind</p>
            <p>Accessibility</p>
            </div>
        </div>
        {/* About us  */}
        <div className="relative mb-[100px]">
        <img src={require("../Images/Quotes.png")} alt="quotes" className="absolute top-[-8vh] left-[12vw] w-[10vw] "></img>
        <div className="border-4 border-[#B4C7A8] p-[2vh] text-center mx-[10vw] rounded-[51px]">
            <h3 className="text-[4rem] mb-[10px]">About Us</h3>
            <p className="font-Montserrat text-[1rem] sm:text-[1.6rem] text-[#666666]">We are a passionate group of people set on a journey to redesign the sustainable fashion industry and make it affordable. This is our way of giving back to the planet. We realize that the current fashion industry needs a necessary makeover and are determined to fix this to offer a happier experience not only to buyers but also to sellers.</p>
            <p className="font-Montserrat text-[1rem] sm:text-[1.6rem] text-[#464646] font-[800]"> We believe that “Creating a sustainable fashion industry isn't just about changing the materials we use or how we produce, it's about changing the way we think about fashion and its impact on our planet.”</p>
        </div>
        </div>
        {/* Testimonials */}

        <header className=" flex text-[2rem] font-Montserrat justify-center items-center mb-[100px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[4.8rem] text-[#494949]">Testimonials</h3>
             <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
        </header>
        <div className="flex justify-around font-Montserrat text-[#666666] gap-[10px] mb-[100px] mr-[10px] ml-[10px]">
            {Testimonials.slice(0,15).map((value,key)=>{
               return( 
                <>
               <TestimonialBox name={value.Name} photo={value.Photo} testimonial={value.testimonial}/>
               </>
               )
            })}
        </div>

        {/* stories from our customers */}
        <header className=" flex text-[2rem] font-Montserrat justify-center items-center mb-[10px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[6.4rem] text-[#494949]">Stories by pRe Love</h3>
             <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
        </header>

        <header className="text-center mb-[100px] text-[3.2rem] font-Montserrat text-[#666666]"> Hear from our customers</header>
            <div className="flex justify-around font-Montserrat text-[#666666] text-[2rem] mb-[100px]  gap-[10px] ml-[10px] mr-[10px]">
                {Stories.slice(0,15).map((value,key)=>{
                        return(
                            <>
                                <StoriesBox photo={value.Photo} name={value.Name} story={value.Story} rating={value.Rating}/>
                            </>
                        )
                    })}
        </div>




        <div className="w-[100%] h-[32px] bg-[#A7B99D] mt-[10px]"></div>
        <Footer/>
        </>
    )
}
export default HomePage;