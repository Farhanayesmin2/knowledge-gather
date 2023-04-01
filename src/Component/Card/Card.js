
import React, { useState } from 'react';
import { BsBookmark, IconName } from "react-icons/bs";
import Bookmark from '../Bookmark/Bookmark';
import Info from '../Info/Info';
// import Bookmark from '../Bookmark/Bookmark';
// import Info from '../Info/Info';


const Card = (props) => {
  

    const { card ,handleAddToInfo,handleClick} = props;
    const { name, date, authorname, title, coverimg, authorimg, readtime } = card;

//    const [readtimes, setReadtime] = useState(0);

//   function handleClick(card) {
//     setReadtime(prevReadtime => prevReadtime + readtime);
//   }

   
  

   
    return (
       
        <div  >
  
            <div className="card  bg-base-100 shadow-xl font-serif border-white border-1 lg:w-[900px] hover:border-indigo-600 border-2">
  <figure className="px-10 pt-10">
    <img src={coverimg} alt="cover" className="  rounded-lg " />
  </figure>
                <div className="card-body text-start lg:w-[100%] ">
                    <div className='flex items-center'>
                        <div className=' flex items-center '>
                          <img src={authorimg} alt="author" className=" sm:ps-5 lg:ps-0 rounded-full btn-circle" />
                            <span className='lg:text-sm lg:font-semibold lg:ps-2 '>{authorname}
                            <br></br>
                            
                            <span className='flex-wrap text-gray-500 '>{date}</span>
                            </span> 
                        </div>
                        <div className="flex items-center mx-auto lg:ps-96"><span className="flex items-center lg:ps-4 lg:pe-0">
                            {readtime} min read  <button onClick={() =>  handleAddToInfo(card)}> <BsBookmark className='lg:ms-3'></BsBookmark></button></span></div>
                    </div>
                    <h2 className="card-title text-violet-700"></h2>
                    <h3 className='font-sherif text-3xl'>{title}</h3>
                    <span className=' text-gray-400 '>#programming #beginners</span>
                    <p className='font-semibold text-green-500'>Time Required: {readtime} s</p>
                 
     <div className="card-actions">
        <button onClick={() => handleClick(card)} className="underline text-xl text-purple-500  hover:text-red-500">Mark as read</button>
      </div>
                </div>
                
                <div >
                   
                </div>      
    
                </div>
        </div>

//  onClick={() =>  handleClick(card)}

    
        
    );
};

export default Card;