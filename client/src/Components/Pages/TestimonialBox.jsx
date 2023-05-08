import React from 'react'

const TestimonialBox = ({name,photo,testimonial}) => {
  return (
    <div className="flex flex-col w-[30%] text-[1.2rem] lg:text-[2rem] items-center justify-center p-[25px]" style={{
        boxShadow:" 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
    }}>
        <img src={require("../Images/double-quotes.png")} alt="double quotes" className="border-[1px] border-[#A9A9A9] rounded-[50%] m-auto w-[3vw] min-w-[40px]"/>
        <p className="text-center mb-[20px]">{testimonial}</p>
        <div className="w-[120px] h-[1px] bg-[#A9A9A9]"></div>
        <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[10px] mb-[10px]"></div>
        <img src={require(`../Images/${photo}`)} alt="avatar" className="border-[1px] border-[#A9A9A9] rounded-[50%]"/>
        <h6>{name}</h6>
        <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>
    </div>
  )
}

export default TestimonialBox;