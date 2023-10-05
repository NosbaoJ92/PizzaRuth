import Menu from "../components/Menu"
import Footer from "../components/Footer"
import "../css/index.css"
import Helmet from 'react-helmet'
import bgImg from "../assets/img/apresentaçãoPizza.png"



function Home(){

    const cardsData = [ //EXEMPLO DE ARRAY
        {id:'1' , imageSrc:'/src/assets/img/pizza/pizzaSalame.png' , title: 'Pizza de Salame', description: 'Massa fina, com molho de tomate fresco...', price:'35,99'},
        {id:'2', imageSrc:'/src/assets/img/pizza/pizza3queijos.png', title: 'Pizza 3 Queijos', description: 'Massa fina, com molho de tomate fresco...', price:'35,99' },
      ];

   
    return( 
        <div className="w-screen h-screen absolute z-10">
            <Helmet title="PizzaRuth" />
            <Menu />

            {/* CONTEÚDO */}
            <section className="w-screen h-screen relative flex items-center">
                <img className="h-full absolute right-0 drop-shadow-[10px_10px_10px_black]" src={bgImg} alt="" />
                <div className="w-6/12 flex flex-col gap-6 p-24"> 
                    <h1 className="text-black text-7xl ">SABOREI A MELHOR PIZZA DA REGIÃO</h1>
                    <a href="/cardapio" className="w-52 bg-red-600 p-4 rounded-full text-white text-center">Acesse o cardápio</a>
                </div>

            </section>
            
            <Footer/>
        </div>
    )
}

export default Home