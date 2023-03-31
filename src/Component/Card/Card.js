
import React, { useState } from 'react';
import { BsBookmark, IconName } from "react-icons/bs";

const Card = (props) => {
  

    const { card ,handleAddToInfo} = props;
    const { name, date, authorname, title, coverimg, authorimg, readtime } = card;


 console.log(handleAddToInfo); 
   
    return (
       
        <div  >
            <div className="card  bg-base-100 shadow-xl font-serif border-white border-1  w-[900px] hover:border-indigo-600 border-2">
  <figure className="px-10 pt-10">
    <img src={coverimg} alt="cover" className="  rounded-lg " />
  </figure>
                <div className="card-body text-start ">
                    <div className='flex items-center justify-end'>
                        <div className=' flex items-center '>
                          <img src={authorimg} alt="author" className="rounded-full btn-circle" />
                            <span className='text-sm font-semibold ps-2 '>{authorname}
                            <br></br>
                            
                            <span className='flex-wrap text-gray-500 '>{date}</span>
                            </span> 
                        </div>
                        <div className="flex items-center mx-auto ps-96"><span className="flex items-center ps-4">
                            {readtime} min read  <button onClick={() =>  handleAddToInfo(card)}> <BsBookmark className='ms-3'></BsBookmark></button></span></div>
                    </div>
                    <h2 className="card-title text-violet-700"></h2>
                    <h3 className='font-sherif text-3xl'>{title}</h3>
                    <span className=' text-gray-400 '>#programming #beginners</span>
                    <p className='font-semibold text-green-500'>Time Required: s</p>
                 
     <div className="card-actions">
        <button  className="underline text-xl text-purple-500  hover:text-red-500">Mark as read</button>
      </div>
  </div>
                
                </div>
        </div>
    );
};

export default Card;