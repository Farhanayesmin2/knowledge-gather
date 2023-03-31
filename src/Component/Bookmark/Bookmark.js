
import React, { useState } from 'react';
  let time = 0;

const Bookmark = ({items}) => {
   

     let blog = 0;
        blog = blog + items.length;
        
    
console.log(items.length);
      
    return (
        <div>
          <h1 className='text-2xl text-center font-semibold font-serif text-violet-900'>Spent time on read: min</h1>
                <div  className='flex items-center'>
                
                <div>
                    <h1>Bookmark Blogs: {blog} </h1>
               
        <h1></h1>
            
                   
</div>
</div>
</div>
       
         
                
           
   
    );
};

export default Bookmark;