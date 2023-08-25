import './styles.css'
import Menu from'./Menu.jsx'


function Home(){
    return(
        <div className="w-full h-auto pb-36 flex flex-col items-center pt-10 gap-2 overflow-x-hidden">
            <Menu />
            <h1 className="text-xl text-violet-600 font-bold">PRÓXIMOS A VOCÊ!</h1>
            <div className="card-local w-full relative gap-3 flex flex-col">
                <a href="" className="w-full h-40 flex flex-col relative justify-between p-2 hover:shadow-md hover:shadow-stone-500 transition-all ease-in delay-150">
                    <div className="w-full h-full flex flex-col gap-2">
                        <p className="text-white font-bold">MUSEU DO CAFÉ</p>
                        <p className="w-8/12 text-sm text-white">O Museu do café conta com seus historiadores a historia de Santos junto ao comércio do café, um inicio marcante pelas...</p>
                    </div>
                    <div className="">
                        <p className="text-white font-bold">Ver localização</p>
                    </div>
                    <div className="absolute w-full h-full"></div>
                </a>
            </div>
            <div className="card-local w-full relative gap-3 flex flex-col ">
                <a href="/MuseuPesca" className="w-full h-40 flex flex-col relative justify-between p-2 hover:shadow-md hover:shadow-stone-500 transition-all ease-in delay-150">
                    <div className="w-full h-full flex flex-col gap-2">
                        <p className="text-white font-bold">MUSEU DA PESCA</p>
                        <p className="w-8/12 text-sm text-white">nstalado em um casarão de 1908, o Museu de Pesca, é uma das principais atrações turísticas de Santos e integra o patrimônio histórico-cultural de toda a...</p>
                    </div>
                    <div className="">
                        <p className="text-white font-bold">Ver localização</p>
                    </div>
                    <div className="absolute w-full h-full bg-contain bg-repeat bg-right -z-10"></div>
                </a>
            </div>
            <h1 className="text-xl text-violet-600 font-bold">MAIS LOCAIS DA REGIÃO</h1>

            {/* CARROSSEL */}
            <div className="carousel carousel-center w-full h-full gap-4">
                <a href="" className="carousel-item w-10/12 h-full flex flex-col ml-8">
                    <div className="w-full h-3/5 bg-violet-600 relative p-2">
                        <div className="bg-white w-full h-full">
                            <img className="w-full h-full" src="src/assets/img/bolsa-cafe.png" alt="" />
                        </div>
                        <div className="absolute bottom-2 w-full">
                            <p className="txt w-full text-white p-2">Bolsa do Café</p>
                        </div>
                    </div>
                    <div className="p-2 w-full h-2/5 bg-violet-500">
                        <p className="w-full h-full overflow-y-hidden after:overflow-ellipsis text-sm text-white">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                        </p>
                    </div>
                </a>  
                <a href="/MuseuPesca" className="carousel-item carousel-item-active w-10/12 h-full flex flex-col ">
                    <div className="w-full h-3/5 bg-violet-600 relative p-2">
                        <div className="bg-white w-full h-full">
                            <img className="w-full h-full" src="src/assets/img/museu-pesca-faixada.png" alt="" />
                        </div>
                        <div className="absolute bottom-2 w-full">
                            <p className="txt w-full text-white p-2">Museu da Pesca</p>
                        </div>
                    </div>
                    <div className="p-2 w-full h-2/5 bg-violet-500">
                        <p className="w-full h-full overflow-y-hidden after:overflow-ellipsis text-sm text-white ">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                        </p>
                    </div>
                </a>  
                <a href="" className="carousel-item w-10/12 h-full flex flex-col">
                    <div className="w-full h-3/5 bg-violet-600 relative p-2">
                        <div className="bg-white w-full h-full">
                            <img className="w-full h-full" src="src/assets/img/bolsa-cafe.png" alt="" />
                        </div>
                        <div className="absolute bottom-2 w-full">
                            <p className="txt w-full text-white p-2">Bolsa do Café</p>
                        </div>
                    </div>
                    <div className="p-2 w-full h-2/5 bg-violet-500">
                        <p className="w-full h-full overflow-y-hidden after:overflow-ellipsis text-sm text-white">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                        </p>
                    </div>
                </a>  
                <a href="" className="carousel-item w-10/12 h-full flex flex-col pr-6">
                    <div className="w-full h-3/5 bg-violet-600 relative p-2">
                        <div className="bg-white w-full h-full">
                            <img className="w-full h-full" src="src/assets/img/bolsa-cafe.png" alt="" />
                        </div>
                        <div className="absolute bottom-2 w-full">
                            <p className="txt w-full text-white p-2">Bolsa do Café</p>
                        </div>
                    </div>
                    <div className="p-2 w-full h-2/5 bg-violet-500">
                        <p className="w-full h-full overflow-y-hidden after:overflow-ellipsis text-sm text-white">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
                        </p>
                    </div>
                </a>  
            </div>
            
        </div>
    )
}

export default Home