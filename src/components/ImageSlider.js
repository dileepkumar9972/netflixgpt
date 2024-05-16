import React, { act, useState } from 'react'

const data=[
    "https://wallpapers.com/images/hd/random-background-1920-x-1200-6ciewyud1u8r1xkl.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64dfc44f-c08c-444e-8aa7-0e8762a53f5d/dg0dra8-4556da02-e8ba-46bd-b1cb-0b890980edfd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZGZjNDRmLWMwOGMtNDQ0ZS04YWE3LTBlODc2MmE1M2Y1ZFwvZGcwZHJhOC00NTU2ZGEwMi1lOGJhLTQ2YmQtYjFjYi0wYjg5MDk4MGVkZmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5FIcTlvqQW2efxJCFFUd4WQxIwn5LMDTp8Aq0g0btWg",
    "https://i.redd.it/random-wallpapers-v0-0mr9bk1r400c1.jpg?width=2944&format=pjpg&auto=webp&s=8c280875394b9bf869d59577dd0e27c9a558c17d",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIULTa-FIggV3SBqX0nIwCWvNdpcnF2Na5bQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCtNmIZobTz-O3XylDlukzILtUY8skKP_vA&usqp=CAU"
]

const ImageSlider = () => {
    const [activeImageIndex,setActiveImageIndex]=useState(0);
    const handleNext=()=>{
       setActiveImageIndex((activeImageIndex+1)%data.length)
        
    }

    const handlePrev=()=>{

        setActiveImageIndex(
            !activeImageIndex ? data.length-1 :activeImageIndex-1
        )
        // if (activeImageIndex===0) setActiveImageIndex(data.length-1);
        // else setActiveImageIndex(activeImageIndex-1)   
    }

  return (
    <div className='flex justify-center'>
        <button className='font-bold p-4 m-10 rounded-md border-spacing-1' onClick={handlePrev}>Previous</button>
        <img src={data[activeImageIndex]} className='w-[500px] h-[500px] object-contain' alt="wallpaper"/>
        <button className='font-bold p-4 m-10 rounded-md border-spacing-1' onClick={handleNext}>Left</button>
    </div>
  )
}

export default ImageSlider