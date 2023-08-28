import React from 'react';

const CardList = ({ cardsData }) => {
  return (
    <div className="card-list pizzaOpcao flex justify-around w-full h-full gap-2 mt-4 max-[767px]:flex-wrap max-[767px]:gap-8">
      {cardsData.map((card, index) => (
        <a href='/Cardapio' className="card pizza relative flex justify-center w-4/12 h-3/4 hover:transition-all hover:drop-shadow-xl max-[767px]:w-4/12 max-[767px]:h-48 border" key={index}>
            <div className="w-full h-full  bg-amber-100 flex items-end rounded-full p-1 ">
                <img  src={card.imageSrc} alt="" className='hover:-translate-y-12 hover:delay-150 hover:transition-all hover:duration-150 hover:ease-linear' />
            </div>
            <div className="pizzaValor absolute flex flex-col justify-center items-center -bottom-12 w-full h-40 rounded-t-full p-2 ">
                <p className="text-stone-900 font-bold ">{card.title}</p>
                <p className="descricao text-xs text-stone-900  p-2">
                    {card.description}
                </p>
            </div>
            {/* <button type="submit" className="icone absolute -bottom-12 flex justify-center items-center w-full"><p className="border w-8 h-8 rounded-full bg-black text-white flex justify-center items-center hover:bg-stone-700 hover:transition-all hover:delay-150">+</p>
            </button> */}
        </a>
      ))}
      
    </div>
  );
};

export default CardList;