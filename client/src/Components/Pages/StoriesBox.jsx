import React from 'react'
import StarIcon from "@mui/icons-material/Star"

const StoriesBox = ({photo,name,story,rating}) => {
  const list=[1,2,3,4,5]
  return (
    <div className="w-[30%] text-[1.2rem] lg:text-[2rem] text-[#666666] p-[25px]" style={{
      boxShadow: " 4px 4px 21px 6px rgba(0, 0, 0, 0.25)",
    }}>
      <div className="flex items-center">
        <img src={require("../Images/Ellipse1.png")} alt="photo" className="border-[1px] border-[#A9A9A9] rounded-[50%]" />
        <div className="ml-[4px] font-Montserrat ">
          <h6>Saniya Malhotra</h6>
          {
            list.slice(0,rating).map((value,key)=>{
              return(
                <StarIcon  style={{color: " #FDCC0D"}}/>
              )
            })
          }
        </div>
      </div>
      <img src={require("../Images/double-quotes.png")} alt="double quotes" />
      <span> Pre-love is trying to solve all sustainable fashion problems under one roof. If done effectively, this can become the sustainable fashion amazon.....</span>
      <div className="w-[3px] h-[3px] bg-[#A9A9A9] mt-[20px]"></div>

    </div>
  )
}

export default StoriesBox