import React, { useEffect, useState } from 'react';




const Info = ( props) => {
     const { item } = props;
     const { name, date, authorname, title, coverimg, authorimg, readtime } =  item;

    //    const { items} = props;
    //  let blog = 0;
    //     blog = blog + items.length;


  
//  let blog = 0;
//     blog = blog + cards.length;
   

    return (
        <div>


                  
          
            
      
                <div  className='flex items-center'>
                
             
                <h1>{title}</h1>
               
                   
           
                   
</div>
</div>


       
         



           

        
    );
};

export default Info;