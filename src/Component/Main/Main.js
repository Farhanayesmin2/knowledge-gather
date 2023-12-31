
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Bookmark from '../Bookmark/Bookmark';
import './Main.css';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
 

 const [totalReadTime, setTotalReadTime] = useState(0);

  function handleClick(item) {
    setTotalReadTime(totalReadTime + item.readtime);
  }

    const [cards, setCards] = useState([]);
       useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
        .then(data => setCards(data))
       }, [])
    
   
    
    const [items, setItems] = useState([]);
  
    const handleAddToInfo = (selectedProduct) => {
      let newItems = [];
        // newItems  = [...items, selectedProduct];
        
        // setItems(newItems);
        // // console.log(newItems);
        
        const itemExists = items.find((item) => item.id === selectedProduct.id);
        

        if (itemExists) {
       const newItems = [...items, selectedProduct];
    setItems(newItems);
    toast.error("You already Bookmarked");
  } else {
    const newItems = [...items, selectedProduct];
    setItems(newItems);
    toast.success("Added Bookmark item.");
  }



    }
    
   
    
    return (
        <div className=' container mx-auto'>
          

            <div className='main-container grid grid-cols-12  gap-4  mt-5'>
            

                
                <div className="card-container  col-span-9  ">
          <div className='grid  gap-4 grid-cols-1 w-[100%] '>
                {
                    cards.map(card => <Card
                        card={card}
                    
                       handleClick = {handleClick}
                        handleAddToInfo={handleAddToInfo}
                        key={card.id}></Card>)
                            
                        }
                         
                 </div>
                </div>
                
               
            <div className="info-container ms-0 bg-yellow-50 col-span-3 md:col-span-3 sm:col-span-3  p-5 font-serif w-[100%] ">
                  <div className='sm:grid-cols-1 '>
  
                        {/* <Info items={items}
                    // readtimes = {readtimes}
                        ></Info> */}
                        <Bookmark total={totalReadTime}
                        items = {items}
                        
                        ></Bookmark>


   <ToastContainer />

                    </div>
            
            </div>
            </div>
            </div>
          
    );
};

export default Main;