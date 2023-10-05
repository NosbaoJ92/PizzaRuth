import CardList2 from "../components/CardList2"
import Menu from "../components/Menu"
import "../css/index.css"
import Helmet from 'react-helmet'

function Cardapio(){
    const cardsData = [
        {id:'1' , imageSrc:'/src/assets/img/pizza/pizzaSalame.png' , title: 'Pizza de Salame', description: 'Massa fina, com molho de tomate fresco...', price:'35,99'},
        {id:'2', imageSrc:'/src/assets/img/pizza/pizza3queijos.png', title: 'Pizza 3 Queijos', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
        {id:'3' , imageSrc:'/src/assets/img/pizza/pizzaNewYork.png', title: 'Pizza New York', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
        {id:'4' , imageSrc:'/src/assets/img/pizza/pizzaNewYork.png', title: 'Pizza New York', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
      ];

    const cardsBebidaData = [
        { imageSrc:'/src/assets/img/bebidas/coca2l.png' , title: 'Coca-Cola 2L', description: '', price:'10,99'},
        { imageSrc:'/src/assets/img/bebidas/refriVariedades.png' , title: 'Refrigerante Lata', description: 'Coca-cola, Sprite, Fanta.', price:'5,99'},       
      ];

    return(
        <div className="w-full flex flex-col justify-center absolute mt-24 pb-24 z-10">
            <Helmet title="PizzaRuth - Cardápio" />
            <Menu />
            
            <div className="w-full h-full flex flex-col justify-center bg-white">
                <h1 className="w-full ml-[250px] mt-6 text-black font-bold text-2xl">Pizzas</h1>
                {/* OPÇÕES */}
                <div className="pizzaOpcao w-full flex justify-center">
                    {/* OPÇÃO */}
                    <CardList2 cardsData={cardsData} />
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center bg-white">
                <h1 className="w-full ml-[250px] mt-6 text-black font-bold text-2xl">Bebidas</h1>
                {/* OPÇÕES */}
                <div className="pizzaOpcao w-full flex justify-center">
                    {/* OPÇÃO */}
                    <CardList2 cardsData={cardsBebidaData} />
                </div>
            </div>
        </div>
    )
}

export default Cardapio