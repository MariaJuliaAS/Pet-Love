import DogStart from "../../assets/Dog-Start.jpg";

export function StartSection() {
    return (
        <section id="start" className="lg:flex-row lg:gap-1 bg-[#EDFBFA] w-full flex flex-col items-center justify-center gap-18 px-12 py-7" style={{ height: "calc(100vh - 5rem" }}>

            <div className="2xl:pl-32 lg:items-start lg:flex-1 flex flex-col items-center">
                <div className="sm:text-start text-center">
                    <h1 className="md:max-w-3xl sm:text-5xl text-2xl font-bold max-w-full text-[#121212] mb-3">O Melhor Lugar para o Seu Pet no Melhor Lugar</h1>
                    <p className="md:max-w-2xl sm:text-xl text-sm max-w-full text-[#808080]">De alimentos premium a brinquedos e acessórios, temos tudo para manter seus amigos peludos felizes e saudáveis em um só lugar.</p>
                </div>

                <div className="mt-10 flex gap-8">
                    <button className="sm:py-2 sm:text-lg bg-[#F66D21] text-white rounded-lg py-1 px-3 font-medium text-sm cursor-pointer transition-all duration-200 hover:scale-105">
                        Ver Produtos
                    </button>

                    <button className="sm:py-2 sm:text-lg bg-white border border-[#0ABAB5] text-[#0ABAB5] rounded-lg py-1 px-3 font-medium text-sm cursor-pointer transition-all duration-200 hover:scale-105">
                        Nossos Serviços
                    </button>
                </div>
            </div>

            <div className="lg:flex-1 flex flex-col items-center">
                <img src={DogStart} alt="Picture of pet"
                    className="2xl:w-110 xl:w-96 lg:w-82 sm:w-72 w-52 rounded-2xl"
                />
            </div>

        </section>
    )
}