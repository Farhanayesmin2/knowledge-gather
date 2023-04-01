
import React from 'react';
import Info from '../Info/Info';


const Bookmark = ({items}) => {
   

     let blog = 0;
        blog = blog + items.length;
        
    
  
    return (
        <div>
          <h1 className='text-2xl text-center font-semibold font-serif text-violet-900'>Spent time on read: min</h1>
                <div  className='flex items-center'>
                
                <div>
                    <h1>Bookmark Blogs: {blog} </h1>
               
                    <h1></h1>
             {
                    items.map(item => <Info
                        item={item}
                     
                        key={item.id}></Info>)
                            
                        }
                   
</div>
</div>
</div>
       
         
                
           
   
    );
};

export default Bookmark;