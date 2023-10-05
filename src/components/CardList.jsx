import React from 'react';

const CardList = ({ cardsData }) => {
  return (
    <div className="card-list flex justify-around w-full h-full gap-2 mt-4 ">
      {cardsData.map((card, index) => (
        <a href='/Cardapio' className='w-6/12 h-72 bg-red-500 hover:bg-red-900 border' key={index}>
            
        </a>
      ))}
      
    </div>
  );
};

export default CardList;