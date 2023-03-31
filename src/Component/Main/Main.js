
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Info from '../Info/Info';


const Main = () => {
    const [cards, setCards] = useState([]);
       useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    
    const [items, setItems] = useState([]);

    const handleAddToInfo = (selectedProduct) => {
        let newItems = [];
        newItems  = [...items, selectedProduct];
        
        setItems(newItems);
        console.log(newItems);
    }
    
    return (
        <div className=' container mx-auto'>
          

            <div className='main-container grid grid-cols-12  gap-4  mt-5'>
            

                
                <div className="card-container  col-span-9  ">
          <div className='grid  gap-4 grid-cols-1 '>
                {
                    cards.map(card => <Card
                        card={card}
                        handleAddToInfo={handleAddToInfo}
                        key={card.id}></Card>)
                    }
                 </div>
                </div>
                
               
            </div>
            </div>
          
    );
};

export default Main;