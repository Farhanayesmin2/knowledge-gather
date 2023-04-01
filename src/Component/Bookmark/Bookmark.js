
import React from 'react';
import Info from '../Info/Info';



const Bookmark = (props) => {
   
    const { items,total } = props;
    //  let blog = 0;
    //     blog = blog + items.length;
        
    // const { totalReadTime } = props;
//     console.log(items);
//     for (const item of items) {
//         const blog = item.title;
//   console.log(item.title);
// }
    
  
    return (
        <div>
            <div className='border-2 hover:border-purple-900 hover:border-2 px-1 w-76 text-blue-500 mb-5 p-o'>
                 <h1 className='font-bold text-2xl'>Spent time on read : {total} min</h1>
           </div>
           
            <div className='text-start'>
            <h1 className='font-bold font-sherif text-xl'>Bookmarked Blog:  {items.length }</h1>       
       </div>

           
            {/* <Info></Info> */}
            <div className=' '>
                <h1 className='text-semibold text-gray-950 mb-3'>
   {

                items.map(item => <Info
                        
                     item = {item}
                    key={item.id}>
                    
                    

                        </Info>)
                    }   
                    </h1>
            </div>

     
                            
         
      
                {/* <div  className='flex items-center'>
                
                <div>
                    <h1>Bookmark Blogs: {blog} </h1>
               
                    <h1></h1>
           
                   
</div>
</div> */}

</div>
       
         
                
           
   
    );
};

export default Bookmark;


            
