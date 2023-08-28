import Menu from "./Menu"
import './index.css'
import CardList from './CardList'

function Home(){
    const cardsData = [
        { imageSrc:'/src/assets/img/pizza/pizzaSalame.png' , title: 'Pizza de Salame', description: 'Massa fina, com molho de tomate fresco...' },
        { imageSrc:'/src/assets/img/pizza/pizza3queijos.png', title: 'Pizza 3 Queijos', description: 'Massa fina, com molho de tomate fresco...' },
        { imageSrc:'/src/assets/img/pizza/pizzaNewYork.png', title: 'Pizza New York', description: 'Massa fina, com molho de tomate fresco...' },
      ];

    return( 
        <div className="mt-24 absolute z-10 flex flex-col w-full justify-center min-[768px]:w-screen">
            <Menu />
            
            <div className="container w-full h-full flex flex-col min-[768px]:w-screen">

                {/* TOPO */}
                <section className="w-screen border">
                    <div className="topo relative max-[767px]:w-full max-[767px]:h-2/4 flex justify-center items-center">
                        <img src="src/assets/img/apresentaçãoPizza.png" alt="" className="pizzaTopo h-full w-full" />
                        <div className="pizzaRuth w-5/12 h-2/5 flex flex-col absolute items-center justify-center gap-4 max-[767px]:w-10/12 max-[767px]:h-3/4">
                            <div className="">
                                <h1 className="bemvindo drop-shadow-md font-extrabold text-center text-4xl text-white">Bem-vindo <br />ao <br />Pizza Ruth</h1>
                            </div>
                            <a href="/Cardapio" className="w-44 text-center bg-red-500 text-white p-2 rounded-full hover:shadow-lg hover:shadow-neutral-800 hover:bg-red-600 hover:border hover:border-red-400 hover:delay-100 hover:transition-all">
                                Acesse o cardápio
                            </a>
                        </div>
                    </div>
                </section>
                

                {/* NOVIDADES */}
                <section className="w-screen border">
                    <div className="w-full flex flex-col justify-center items-center gap-2 p-2 mt-10">
                        <p className="text-3xl font-semibold text-stone-800">
                            Novidades
                        </p>
                        {/* OPÇÕES */}
                        <div className="pizzaOpcao flex justify-around w-full h-full mt-4">

                            {/* OPÇÃO */}
                            <CardList cardsData={cardsData} />
                        </div>
                    </div>
                </section>
                

                <div className="relative mt-20 max-[767px]:w-full h-1/4 flex items-center pt-4 pl-4 bg-amber-100">
                    <img src="src/assets/img/chefRuth.png" alt="" className="w-6/12" />
                    <img src="src/assets/img/ingredientesRuth.png" alt="" className="w-6/12" />
                    <div className="chefRuth w-6/12 h-3/4 right-4 flex flex-col absolute items-center justify-around gap-2 p-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home