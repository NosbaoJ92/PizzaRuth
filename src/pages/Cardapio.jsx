import CardList2 from './CardList2'
import Menu from "./Menu"

function Cardapio(){
    const cardsData = [
        {id:'1' , imageSrc:'/src/assets/img/pizza/pizzaSalame.png' , title: 'Pizza de Salame', description: 'Massa fina, com molho de tomate fresco...', price:'35,99'},
        {id:'2', imageSrc:'/src/assets/img/pizza/pizza3queijos.png', title: 'Pizza 3 Queijos', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
        {id:'3' , imageSrc:'/src/assets/img/pizza/pizzaNewYork.png', title: 'Pizza New York', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
      ];

    const cardsBebidaData = [
        { imageSrc:'/src/assets/img/bebidas/coca2l.png' , title: 'Coca-Cola 2L', description: '', price:'10,99'},
        { imageSrc:'/src/assets/img/bebidas/refriVariedades.png' , title: 'Refrigerante Lata', description: 'Coca-cola, Sprite, Fanta.', price:'5,99'},       
      ];
    return(
        <div className="w-full absolute mt-24 z-10">
            <Menu />
            
            <div className="w-full h-full flex flex-col items-center bg-white">
                <p className="text-3xl font-semibold text-stone-800 mt-6">
                    Nossas Pizzas
                </p>
                {/* OPÇÕES */}
                <div className="pizzaOpcao flex justify-around w-full h-full gap-16 flex-wrap">

                    {/* OPÇÃO */}
                    <CardList2 cardsData={cardsData} />
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center bg-white mt-4">
                <p className="text-3xl font-semibold text-stone-800 mt-6">
                    Bebidas
                </p>
                {/* OPÇÕES */}
                <div className="bebidasOpcao flex justify-around w-full h-full gap-16 flex-wrap">

                    {/* OPÇÃO */}
                    <CardList2 cardsData={cardsBebidaData} />
                </div>
            </div>
        </div>
    )
}

export default Cardapio