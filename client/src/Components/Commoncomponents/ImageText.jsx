import React from 'react'

const ImageText = ({image, text, alternate }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={require(`../Images/${image}`)}  alt={`${alternate}`} />
      <p className='hidden text-[1.2rem] md:inline lg:text-[1.6rem]'><strong>{text}</strong></p>
    </div>
  )
}

export default ImageText
