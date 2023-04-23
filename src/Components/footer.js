import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='font-Montserrat flex text-[24px] leading-[60px] bg-[#F1F3F2]'>
        <div className='flex justify-around w-[50%]' >
        <div>
            <div>
                <h6 className="font-[800] mt-[70px] mb-[40px]">Online shopping</h6>
                <p>pRe Loved Fashion</p>
                <p>Eco Fashion</p>
            </div>

            <div>
                <h6 className="font-[800] mt-[100px] mb-[40px]">Useful Links</h6>
                <p>About Us</p>
                <p>Stories by pRe Love</p>
            </div>
        </div>
        <div>
            <h6 className="font-[800] mt-[70px] mb-[40px]">Customer Policies</h6>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>T&C</p>
            <p>Track Orders</p>
            <p>Terms of Use</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy Policy</p>
            <p>Complaints</p>
        </div>
   
        </div>
        <div className='w-[50%] flex items-center justify-center content-center'>
            <img src={require("./Images/Megaphone.png")} className='mr-[40px]'></img>
            <div>
                <p className='font-[700] text-[#494949] text-[48px]'>Get in Touch</p>
                <div className='flex justify-between'>
                    <img src={require("./Images/Insta.png")} alt="Instagram"></img>
                    <img src={require("./Images/fb.png")}  alt="Facebook"></img> 
                    <img src={require("./Images/linkedin.png")} alt='LinkedIn'></img>
                    <img src={require("./Images/YT.png")} alt='YouTube'></img>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;