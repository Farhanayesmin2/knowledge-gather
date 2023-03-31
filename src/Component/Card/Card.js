
import React from 'react';

const Card = (props) => {
    const { card ,handleAddToInfo} = props;
    const { name, date, authorname, title,coverimg,authorimg,time } = card;
   
    return (
       
        <div  >
            <div className="card  bg-base-100 shadow-xl font-serif border-white border-1   hover:border-indigo-600 border-2">
  <figure className="px-10 pt-10">
    <img src={coverimg} alt="Shoes" className="rounded-lg" />
  </figure>
  <div className="card-body  ">
                    <h2 className="card-title text-violet-700">{authorname}</h2>
                    <h3 className=''>Calorie: {title}</h3>
                    <p className='font-semibold text-green-500'>Time Required: {time}s</p>
                 
    <div className="card-actions">
      <button onClick={() => handleAddToInfo(card)} className="btn bg-violet-800  items-center w-full hover:bg-green-800">Add To List</button>
    </div>
  </div>
                
                </div>
        </div>
    );
};

export default Card;