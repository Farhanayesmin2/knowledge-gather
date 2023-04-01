import React from 'react';




const Info = (props) => {
    const { item } = props;
    const { name, date, authorname, title, coverimg, authorimg, readtime } =  item;

   

    return (
      <div>

            <h1>{title}</h1>

   
            </div>




           

        
    );
};

export default Info;