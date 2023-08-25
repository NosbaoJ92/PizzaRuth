
function MuseuPesca(){
    return(
        <div className="w-full overflow-x-hidden">
            <div className="flex flex-col justify-center items-center gap-4 p-5">
                <h1 className="text-xl font-bold text-violet-600">SOBRE O LOCAL</h1>
                <p className="text-justify w-11/12 text-violet-600">
                O Museu de Pesca tem finalidades culturais e objetiva a divulgação de conhecimentos originados do estudo do ambiente aquático e da tecnologia aplicada para a exploração racional de recursos marinhos e de águas continentais.</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-violet-600 p-2">
                <p className="text-xl font-bold text-white">FOTOS DO LOCAL</p>
                <div className="localFotos flex w-screen h-44 gap-6 p-4 overflow-x-scroll">
                    <img src="src/assets/img/museu-pesca-faixada.png" alt="" className="" />
                    <img src="src/assets/img/museu-pesca.jpg" alt="" className="" />
                    <img src="src/assets/img/museu-pesca.jpg" alt="" className="" />
                    <img src="src/assets/img/museu-pesca.jpg" alt="" className="" />
                    <img src="src/assets/img/museu-pesca.jpg" alt="" className="" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-44 gap-2">
                <p className="text-xl font-bold text-violet-600">EVENTOS</p>
                <ul className="text-justify w-10/12 text-violet-600 list-disc text-sm">
                    <li className="">Musica ao vivo das 15h até 22h - segunda e terça;</li>
                    <li className="">Karaokê com amigos/familiares das 17h até 22h - quarta e quinta;</li>
                    <li className="">Rodizio apartir de 55,90 das 15h adiante - sexta, sabado e domingo.</li>
                </ul>
            </div>
            <iframe src="https://maps.google.com/maps?q=R. Quinze de Novembro, 95 - Centro, Santos - SP, 11010-150&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" className="w-full h-60"></iframe>
        </div>
    )
}

export default MuseuPesca