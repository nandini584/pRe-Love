import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <div className='font-Montserrat flex text-[1rem] lg:text-[2rem]  bg-[#F1F3F2]'>
        <div className='flex justify-around w-[50%]' >
        <div>
            <div>
                <h6 className="font-[800] mt-[70px] mb-[40px]">Online shopping</h6>
                <p className='hover:text-[#4444c4] cursor-pointer'>pRe Loved Fashion</p>
                <p className='hover:text-[#4444c4] cursor-pointer'>Eco Fashion</p>
            </div>

            <div>
                <h6 className="font-[800] mt-[50px] mb-[40px]">Useful Links</h6>
                <p className='hover:text-[#4444c4] cursor-pointer'>About Us</p>
                <p className='hover:text-[#4444c4] cursor-pointer'>Stories by pRe Love</p>
            </div>
        </div>
        <div>
            <h6 className="font-[800] mt-[70px] mb-[40px]">Customer Policies</h6>
            <div className='flex gap-[30px] justify-center'>
                <div>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Contact Us</p>
                    <p className='hover:text-[#5a5abe] cursor-pointer'>FAQs</p>
                    <p className='hover:text-[#5a5abe] cursor-pointer'>T&C</p>
                    <p className='hover:text-[#5a5abe] cursor-pointer'>Track Orders</p>
                    <p className='hover:text-[#5a5abe] cursor-pointer'>Terms of Use</p>
                </div>
                <div>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Shipping</p>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Cancellation</p>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Returns</p>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Privacy Policy</p>
                    <p className='hover:text-[#4444c4] cursor-pointer'>Complaints</p>
                </div>
            </div>
        </div>
   
        </div>
        <div className='w-[50%] flex items-center justify-center content-center'>
            <img src={require("../Images/Megaphone.png")} alt='Megaphone' className='mr-[40px] w-[15vw]'/>
            <div>
                <p className='font-[700] text-[#494949] text-[4.8rem]'>Get in Touch</p>
                <div className='flex w-[50%] justify-around'>
                    <InstagramIcon fontSize='large'/> 
                    <FacebookIcon fontSize='large' style={{color:"#3b5998"}}/>
                    <LinkedInIcon fontSize='large' style={{color:"#0A66C2"}}/>
                    <YouTubeIcon fontSize='large' style={{color:"red"}}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;