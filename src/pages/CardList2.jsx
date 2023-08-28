import React from 'react';

const CardList2 = ({ cardsData }) => {
  
  return (
    <div className="card-list pizzaOpcao flex justify-around w-full h-full gap-3 mt-4 flex-wrap p-6">
      {cardsData.map((card, index) => (
        <a href="#" className="w-full h-48 flex p-2 rounded-xl bg-amber-100 hover:bg-amber-200 hover:scale-105 hover:border border-amber-500 hover:transition-all hover:delay-150 hover:shadow-lg duration-150" key={index}>
            <div className="w-6/12 h-full">
                <img  src={card.imageSrc} alt="" className='w-full h-full object-contain' />
            </div>
            <div className="w-8/12 h-full p-2 text-white flex flex-col justify-between">
              <div className="w-full flex flex-col gap-1">
                <p className="font-bold text-stone-900 text-xl">{card.title}</p>
                <p className="text-stone-700 w-full flex-wrap">
                    {card.description}
                </p>
              </div>  
              <p className="text-stone-700 flex gap-1 text-xl font-bold">
                  <p className="">R$</p>
                  {card.price}
              </p>
            </div>
            
        </a>
      ))}
      
    </div>
  );
};

export default CardList2;