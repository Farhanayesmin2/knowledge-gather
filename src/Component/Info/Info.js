import React, { useEffect, useState } from 'react';




const Info = ( ) => {
    // const { readtimes } = props;
    // // const { name, date, authorname, title, coverimg, authorimg, readtime } =  item;

    //    const { items} = props;
    //  let blog = 0;
    //     blog = blog + items.length;

     const [cards, setCards] = useState([]);
       useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
        .then(data => setCards(data))
    }, [])
  

    return (
        <div>


              {/* {
                    items.map(item => <Info
                        item={item}
                     
                        key={item.id}></Info>)
                            
            } */}
            
      
                <div  className='flex items-center'>
                
                <div>
                    {/* <h1>Bookmark Blogs: {blog} </h1> */}
                    <h1>Bookmark Blogs: {}  </h1>
               
                    <h1></h1>
           
                   
</div>
</div>
</div>
       
         



           

        
    );
};

export default Info;