
import React from 'react';
import { BsBookmark, IconName } from "react-icons/bs";

const Card = (props) => {
    const { card ,handleAddToInfo} = props;
    const { name, date, authorname, title,coverimg,authorimg,readtime } = card;
   
    return (
       
        <div  >
            <div className="card  bg-base-100 shadow-xl font-serif border-white border-1  w-[900px] hover:border-indigo-600 border-2">
  <figure className="px-10 pt-10">
    <img src={coverimg} alt="cover" className="  rounded-lg " />
  </figure>
                <div className="card-body text-start ">
                    <div className='flex justify-end'>
 <img src={authorimg} alt="author" className="rounded-full btn-circle" />
                    <span className=' pt-3 text-gray-500 ps-4'>{authorname }</span>

                   <div className="flex items-center mx-auto ps-96"><span className="flex items-center ps-4"> {readtime} min read  <BsBookmark className='ms-3'></BsBookmark></span></div>
                    </div>
              
                   
                    <h2 className="card-title text-violet-700"></h2>
                    <h3 className=''>Calorie: {title}</h3>
                    <p className='font-semibold text-green-500'>Time Required: s</p>
                 
    <div className="card-actions">
      <button onClick={() => handleAddToInfo(card)} className="btn bg-violet-800  items-center w-full hover:bg-green-800">Add To List</button>
    </div>
  </div>
                
                </div>
        </div>
    );
};

export default Card;