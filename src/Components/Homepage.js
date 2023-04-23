import StarIcon from "@mui/icons-material/Star"
import Footer from "./footer";

const HomePage=()=>{
    return(
        <>
        <div className="flex">
            <div className="flex items-center flex-col justify-center w-[calc(50%-5px)] h-[688px] bg1 text-white mr-0 font-Montserrat text-[48px]">
                    <h3>pRe Loved Fashion</h3>
                    <h6 className="text-[32px]">fashion in a loop</h6>
                    <button className="border-2 border-white w-[286px] h-[80px] text-[32px] font-sans rounded-[7px] mt-[70px]">Shop Now</button>
            </div>
            <div className="flex items-center flex-col  justify-center w-[calc(50%-5px)] h-[688px] bg2 text-white font-Montserrat text-[48px]" >
                    <h3>Eco Fashion</h3>
                    <h6 className="text-[32px]">fashion for the planet</h6>
                    <button className="border-2 border-white w-[286px] h-[80px] text-[32px] font-sans rounded-[7px] mt-[70px]">Coming Soon</button>
                    
            </div>
        </div>

        <div className="w-[100%] h-[32px] bg-[#A7B99D] mb-[40px]"></div>

        <div className="flex items-center flex-col">
            <h4 className="text-center text-[36px] text-[#666666] font-Montserrat"> Overflowing Wardrobes? Worry no more</h4>
            <h2 className="text-center text-[96px] text-[#494949] font-Montserrat">Sell & Earn</h2>
            <h4 className="text-center text-[36px] text-[#666666] font-[500] font-Montserrat">Easy Tracking. Doorstep Pickup. No Selling fees. Lucrative paybacks</h4>
            <hr className="w-[285px] h-[9px] bg-[#A7B99D] m-auto mt-[30px] mb-[30px] rounded-[5px]"></hr>
            <span className="font-Montserrat text-[40px] text-[#666666] font-[500]">The Hassle Free Process</span>
            <div className="grid text-center text-[32px] font-Montserrat w-full text-[#666666] mb-[80px]" style={{
                gridTemplateColumns:"33% 33% 33%",
                gridTemplateRows:"500px 40px"
            }}> 
                <img src={require("./Images/1.png")} alt="online shopping"></img>
                <img src={require("./Images/2.png")} alt="online shopping"></img>
                <img src={require("./Images/3.png")} alt="online shopping"></img>
                <p>List Your pRe Loved Clothes</p>
                <p>Pack and handover for delivery</p>
                <p>Recieve Your Payback</p>
            </div>
            <button className="bg-[#A7B99D] w-[407px] h-[105px] text-[48px] text-white rounded-[20px] font-Montserrat mb-[140px]">Sell Now</button>
        </div>

        {/* why pre love */}

        <div className="w-[100%] h-[400px] bg-[#B4C7A8] flex flex-col text-center font-Montserrat text-white text-[32px] mb-[70px]">
            <h2 className="text-[64px] mb-[70px]">Why pRe Love</h2>
            <div className="grid" style={{
                gridTemplateColumns:"25% 25% 25% 25%",
                gridTemplateRows:"150px 40px"
            }}> 
            <img src={require("./Images/Money.png")} alt="Affordability" className="m-auto"/>
            <img src={require("./Images/Earth.png")} alt="Sustainablity" className="m-auto"/>
            <img src={require("./Images/shirt.png")} alt="unique"className="m-auto"/>
            <img src={require("./Images/heart-handshake.png")} alt="Accessibility" className="m-auto"/>
            <p>Affordablity</p>
            <p>Sustainablity</p>
            <p>One of a kind</p>
            <p>Accessibility</p>
            </div>
        </div>
        {/* About us  */}
        <div className="relative mt-[150px] mb-[100px]">
        <img src={require("./Images/Quotes.png")} alt="quotes" className="absolute top-[-200px] left-[100px]"></img>
        <div className="border-4 border-[#B4C7A8] p-[50px] text-center mx-[50px] rounded-[51px]">
            <h3 className="text-[140px] mb-[10px]">About Us</h3>
            <p className="font-Montserrat text-[26px] text-[#666666]">We are a passionate group of people set on a journey to redesign the sustainable fashion industry and make it affordable. This is our way of giving back to the planet. We realize that the current fashion industry needs a necessary makeover and are determined to fix this to offer a happier experience not only to buyers but also to sellers.</p>
            <p className="font-Montserrat text-[26px] text-[#464646] font-[800]"> We believe that “Creating a sustainable fashion industry isn't just about changing the materials we use or how we produce, it's about changing the way we think about fashion and its impact on our planet.”</p>
        </div>
        </div>
        {/* Testimonials */}

        <header className=" flex text-[20px] font-Montserrat justify-center items-center mb-[100px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[48px] text-[#494949]">Testimonials</h3>
             <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
        </header>
        <div className="flex justify-around font-Montserrat text-[#666666] gap-[10px] text-[20px] mb-[100px] mr-[10px] ml-[10px]">
            <div className="flex flex-col w-[523px] items-center justify-center p-[27px]" style={{
                boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
            }}>
                <img src={require("./Images/double-quotes.png")} alt="double quotes" className="border-[1px] border-[#A9A9A9] rounded-[50%] m-auto"/>
                <p className="text-center mb-[20px]">"Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon"</p>
                <div className="w-[120px] h-[1px] bg-[#A9A9A9]"></div>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[10px] mb-[0px]"></div>
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <h6>Saniya Malhotra</h6>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
            </div>

            <div className="flex flex-col w-[523px] h-[474px] items-center justify-center p-[27px]" style={{
                boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
            }}>
                <img src={require("./Images/double-quotes.png")} alt="double quotes" className="border-[1px] border-[#A9A9A9] rounded-[50%] m-auto"/>
                <p className="text-center mb-[20px]">"Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon"</p>
                <div className="w-[120px] h-[1px] bg-[#A9A9A9]"></div>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[10px] mb-[0px]"></div>
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <h6>Saniya Malhotra</h6>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
            </div>

            <div className="flex flex-col w-[523px] h-[474px] items-center justify-center p-[27px]" style={{
                boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
            }}>
                <img src={require("./Images/double-quotes.png")} alt="double quotes" className="border-[1px] border-[#A9A9A9] rounded-[50%] m-auto"/>
                <p className="text-center mb-[20px]">"Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon"</p>
                <div className="w-[120px] h-[1px] bg-[#A9A9A9]"></div>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[10px] mb-[0px]"></div>
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <h6>Saniya Malhotra</h6>
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
            </div>
        </div>

        {/* stories from our customers */}
        <header className=" flex text-[20px] font-Montserrat justify-center items-center mb-[10px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[64px] text-[#494949]">Stories by pRe Love</h3>
             <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
        </header>

        <header className="text-center mb-[100px] text-[32px] font-Montserrat text-[#666666]"> Hear from our customers</header>
            <div className="flex justify-around font-Montserrat text-[#666666] text-[20px] mb-[100px]  gap-[10px] ml-[10px] mr-[10px]">
            <div className="w-[523px] h-[400px] text-[20px] text-[#666666] p-[50px]"  style={{
                    boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
                }}>
                <div className="flex items-center">
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <div className="ml-[4px] font-Montserrat ">
                    <h6>Saniya Malhotra</h6>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                </div>
                </div>
                <img src={require("./Images/double-quotes.png")} alt="double quotes"/>
                <span> Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon.....</span> 
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>

            </div>
            <div className="w-[523px] h-[400px] text-[20px] text-[#666666] p-[50px]"  style={{
                    boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
                }}>
                <div className="flex items-center">
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <div className="ml-[4px] font-Montserrat ">
                    <h6>Saniya Malhotra</h6>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                </div>
                </div>
                <img src={require("./Images/double-quotes.png")} alt="double quotes"/>
                <span> Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon.....</span> 
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
                
            </div>
            <div className="w-[523px] h-[400px] text-[20px] text-[#666666] p-[50px]"  style={{
                    boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
                }}>
                <div className="flex items-center">
                <img src={require("./Images/Ellipse 1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
                <div className="ml-[4px] font-Montserrat ">
                    <h6>Saniya Malhotra</h6>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>                
                    <StarIcon style={{
                        color: "yellow",
                    }}/>
                </div>
                </div>
                <img src={require("./Images/double-quotes.png")} alt="double quotes"/>
                <span> Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon.....</span> 
                <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
                
            </div>
        </div>


{/* FAQ section */}
        <header className=" flex text-[20px] font-Montserrat justify-center items-center mb-[10px]">
            <div className="w-[292.5px] h-[1px] bg-[#A9A9A9]"></div>
             <h3 className="text-[64px] text-[#494949]">FAQs</h3>
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
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">Who can sell?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        We entertain 2 types of sellers. Any individual who wants to do a closet clearance can do so through our website. Also, businesses who sell thrift fashion can do so through our site.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">What are the services you provide?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        You can buy an extensive range of pre-loved clothes from us sourced from some top brands. You can also register yourself as a seller either being an individual or a thrift store yourself.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">What are the payment options?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        We allow payments through credit card, debit card, net banking and UPI.
                        </p>
                    </div>

                    <div className="p-[50px] h-[250px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">what is the return policy?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        The return policy is subject specific. You can look this up in our T & C.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">what is pRe Loved fashion?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        Apparels that were loved by someone else before being offered for sale are called preloved fashion. This process is also called thrifting. At pRe-Love, we sell only those which are in good condition...
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">How to set up a seller account?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        You have to register yourself with us by creating a seller account, agree to the terms and conditions stateside and then you can begin selling on our platform.
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">Are there any shipping charges?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        Lorem ipsum
                        </p>
                    </div>

                    <div className="p-[50px] rounded-[38px] bg-white" style={{
                        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.2)",
                    }}>
                        <h6 className="text-[24px] text-[#9DAC93] font-Montserrat font-[700] mb-[15px]">How are you making impact on the Environment?</h6>
                        <div className="h-[1px] bg-[#A9A9A9] mb-[5px]"></div>
                        <p className="font-Montserrat text-[20px] text-[#666666]">
                        Thrifting is the easiest and best way to practice sustainable fashion because it skips multiple checkpoints thus, reducing pollution in all parts of the value chain. It is based on the circular....
                        </p>
                    </div>

        </div>

        <div className="w-[100%] h-[32px] bg-[#A7B99D] mt-[10px]"></div>
        <Footer/>
        </>
    )
}
export default HomePage;