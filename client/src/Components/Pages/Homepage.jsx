import Footer from "./footer";
import TestimonialBox from "./TestimonialBox"
import Testimonials from "../Data/Testimonials.json"
import Stories from "../Data/Stories.json"
import StoriesBox from "./StoriesBox";
const HomePage=()=>{
    return(
        <>
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


        {/* sell now */}
        {/* <div className="flex items-center flex-col ">
            <h4 className="text-center text-[3rem] text-[#666666] font-Montserrat"> Overflowing Wardrobes? Worry no more</h4>
            <h2 className="text-center text-[8rem] text-[#494949] font-Montserrat">Sell & Earn</h2>
            <h4 className="text-center text-[3rem] text-[#666666] font-[500] font-Montserrat">Easy Tracking. Doorstep Pickup. No Selling fees. Lucrative paybacks</h4>
            <hr className="w-[285px] h-[9px] bg-[#A7B99D] m-auto mt-[30px] mb-[30px] rounded-[5px]"></hr>
            <span className="font-Montserrat text-[4rem] text-[#666666] font-[500]">The Hassle Free Process</span>
            <div className="grid gap-[2vw] text-center text-[2.2rem] font-Montserrat text-[#666666] mb-[60px] max-w-[70vw]" style={{
                gridTemplateColumns:"33% 33% 33%",
                gridTemplateRows:"50vh 10vh"
            }}> 
                <img src={require("../Images/1.png")} alt="online shopping" className="max-h-[50vh] w-auto" ></img>
                <img src={require("../Images/2.png")} alt="online shopping" className="max-h-[50vh] w-auto" ></img>
                <img src={require("../Images/3.png")} alt="online shopping" className="max-h-[50vh] w-auto" ></img>
                <p>List Your pRe Loved Clothes</p>
                <p>Pack and handover for delivery</p>
                <p>Recieve Your Payback</p>
            </div>
            <button className="bg-[#A7B99D] w-[407px] h-[105px] text-[4.8rem] text-white rounded-[20px] font-Montserrat mb-[140px]">Sell Now</button>
        </div> */}

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


{/* FAQ section */}
        {/* <header className=" flex text-[2rem] font-Montserrat justify-center items-center mb-[10px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[6.4rem] text-[#494949]">FAQs</h3>
             <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
        </header>

        <div className="grid ml-[4%] mr-[4%] pb-[8%] FAQs" style={{
                gridTemplateRows:"1fr 1fr 1fr 1fr",
                gridTemplateColumns:"1fr 1fr",
                gridGap:"5%",
            }}>
                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">Who can sell?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        We entertain 2 types of sellers. Any individual who wants to do a closet clearance can do so through our website. Also, businesses who sell thrift fashion can do so through our site.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">What are the services you provide?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        You can buy an extensive range of pre-loved clothes from us sourced from some top brands. You can also register yourself as a seller either being an individual or a thrift store yourself.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">What are the payment options?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        We allow payments through credit card, debit card, net banking and UPI.
                        </p>
                    </div>

                    <div className="p-[50px] h-[250px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">what is the return policy?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        The return policy is subject specific. You can look this up in our T & C.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">what is pRe Loved fashion?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        Apparels that were loved by someone else before being offered for sale are called preloved fashion. This process is also called thrifting. At pRe-Love, we sell only those which are in good condition...
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">How to set up a seller account?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        You have to register yourself with us by creating a seller account, agree to the terms and conditions stateside and then you can begin selling on our platform.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">Are there any shipping charges?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        Lorem ipsum
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[2.4rem] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">How are you making impact on the Environment?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[2rem] text-[#666666]">
                        Thrifting is the easiest and best way to practice sustainable fashion because it skips multiple checkpoints thus, reducing pollution in all parts of the value chain. It is based on the circular....
                        </p>
                    </div>

        </div> */}

        <div className="w-[100%] h-[32px] bg-[#A7B99D] mt-[10px]"></div>
        <Footer/>
        </>
    )
}
export default HomePage;