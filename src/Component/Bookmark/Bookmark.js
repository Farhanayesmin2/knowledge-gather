
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
           
            <h1>{items.length }</h1>
       
<h1>Total: {total} </h1>
             
          {/* <Info></Info> */}

           {

                items.map(item => <Info
                        
                     item = {item}
                    key={item.id}>
                    
                    

                        </Info>)
              }     
                            
         
      
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


            
