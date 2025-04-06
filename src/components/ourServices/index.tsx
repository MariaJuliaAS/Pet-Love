import bathGrooming from "../../assets/bathGrooming.jpg";
import hosting from "../../assets/hosting.jpg";
import veterinaryCare from "../../assets/veterinaryCare.jpg";
import training from "../../assets/training.jpg";

export function OurServices() {
    return (
        <section id="ourServices" className="w-full h-full min-h-screen flex flex-col items-center justify-center px-12 py-7 bg-[#FFE8D6]">

            <div className="my-12 flex flex-col items-center ">
                <h1 className="2xl:text-5xl sm:text-4xl text-2xl font-bold text-[#F66D21] mb-3">Nossos Serviços</h1>
                <p className="2xl:text-xl sm:text-lg text-sm text-center text-[#808080]">Serviços de cuidados profissionais para seus amiguinhos.</p>
            </div>

            <div className="lg:grid-cols-2 sm:gap-18 grid grid-cols-1 gap-8 mb-12">
                <div className="bg-[#E6F8F7] rounded-xl border border-[#d3d3d3] flex flex-col items-center py-3 px-5">
                    <img src={bathGrooming} alt="Bath and Grooming" className="rounded-full w-20 h-20 object-cover" />
                    <h4 className="sm:text-lg font-medium text-base m-1.5">Banho e Tosa</h4>
                    <p className="sm:text-base text-sm text-[#808080] max-w-96 text-center">Serviços profissionais de banho, tosa, corte de unhas e muito mais.</p>
                    <button className="sm:text-base px-3 py-1 font-medium text-sm border border-[#0ABAB5] text-[#0ABAB5] bg-white rounded-lg mt-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Saiba mais
                    </button>
                </div>
                <div className="bg-[#FFD2E4] rounded-xl border border-[#d3d3d3] flex flex-col items-center py-3 px-5">
                    <img src={veterinaryCare} alt="Veterinary Care" className="rounded-full w-20 h-20 object-cover" />
                    <h4 className="sm:text-lg font-medium text-base m-1.5">Cuidados Veterinários</h4>
                    <p className="sm:text-base text-sm text-[#808080] max-w-96 text-center">Check-ups regulares, vacinas e tratamentos com nossos veterinários experientes.</p>
                    <button className="sm:text-base px-3 py-1 font-medium text-sm border border-[#FF9EC5] text-[#FF9EC5] bg-white rounded-lg mt-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Saiba mais
                    </button>
                </div>
                <div className="bg-[#DCC8FF] rounded-xl border border-[#d3d3d3] flex flex-col items-center py-3 px-5">
                    <img src={training} alt="Training Class" className="rounded-full w-20 h-20 object-cover" />
                    <h4 className="sm:text-lg font-medium text-base m-1.5">Aulas de Treinamento</h4>
                    <p className="sm:text-base text-sm text-[#808080] max-w-96 text-center">Treinamento de obediência, modificação de comportamento e socialização para cães de todas as idades.</p>
                    <button className="sm:text-base px-3 py-1 font-medium text-sm border border-[#8A4FFF] text-[#8A4FFF] bg-white rounded-lg mt-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Saiba mais
                    </button>
                </div>
                <div className="bg-[#FFEC8A] rounded-xl border border-[#d3d3d3] flex flex-col items-center py-3 px-5">
                    <img src={hosting} alt="Hosting" className="rounded-full w-20 h-20 object-cover" />
                    <h4 className="sm:text-lg font-medium text-base m-1.5">Hospedagem para Pets</h4>
                    <p className="sm:text-base text-sm text-[#808080] max-w-96 text-center">Acomodação segura e confortável para seus pets enquanto você estiver fora.</p>
                    <button className="sm:text-base px-3 py-1 font-medium text-sm border border-[#E9C400] text-[#E9C400] bg-white rounded-lg mt-4 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>
    )
}