import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

export function ContactSection() {
    return (
        //Falta responsividade

        <section id="contact" className="lg:flex-row w-full h-full min-h-screen flex items-center justify-center flex-col px-6 py-12 sm:gap-0 gap-4">
            <div className="items-center justify-center flex flex-1 flex-col">
                <div >
                    <h1 className="2xl:text-5xl sm:text-3xl text-2xl text-[#0ABAB5] font-bold mb-1">Fale Conosoco</h1>
                    <p className="2xl:text-xl sm:text-lg text-sm text-[#808080]">Precisa de ajuda? Entre em contato com nosso time e teremos o prazer em te ajudar.</p>
                    <span className="2xl:text-lg sm:text-base text-sm flex flex-row text-[#121212] pb-2 mt-12"> <FaLocationDot size={22} color="#0ABAB5" className="mr-3" /> Rua dos Pets, 123, Bairro Animal, Baraúna - RN, 01234-56 </span>
                    <span className="2xl:text-lg sm:text-base text-sm  flex flex-row text-[#121212] pb-2"> <FaPhoneAlt size={22} color="#0ABAB5" className="mr-3" /> (84) 99123-4567 </span>
                    <span className="2xl:text-lg sm:text-base text-sm  flex flex-row text-[#121212] pb-2"> <MdEmail size={22} color="#0ABAB5" className="mr-3" /> contato@petlove.com </span>
                    <span className="2xl:text-lg sm:text-base text-sm  flex flex-row text-[#121212] pb-2"> <FaClock size={22} color="#0ABAB5" className="mr-3" /> Aberto 24 Horas </span>
                </div>
            </div>

            <div className=" flex flex-1 justify-center items-center w-full">
                <div className="2xl:w-8/12 xl:w-9/12 sm:w-10/12 sm:px-7 bg-[#E6F8F7] border border-[#D3D3D3] rounded-xl px-4 py-2 w-12/12">
                    <h3 className="2xl:text-2xl sm:text-xl text-[#0ABAB5] font-bold text-lg mb-7">Envie-nos uma Mensagm</h3>

                    <form className="flex flex-col">
                        <label className="2xl:text-lg sm:text-base text-sm font-medium text-[#121212]">Nome</label>
                        <input type="text" placeholder="João" className="border border-[#D3D3D3] rounded-lg px-2 py-1 text-[#121212] bg-white mb-4" />

                        <label className="2xl:text-lg sm:text-base text-sm font-medium text-[#121212]">Sobrenome</label>
                        <input type="text" placeholder="Silva" className="border border-[#D3D3D3] rounded-lg px-2 py-1 text-[#121212] bg-white mb-4" />

                        <label className="2xl:text-lg sm:text-base text-sm font-medium text-[#121212]">E-mail</label>
                        <input type="email" placeholder="joaosilva@exemplo.com" className="border border-[#D3D3D3] rounded-lg px-2 py-1 text-[#121212] bg-white mb-4" />

                        <label className="2xl:text-lg sm:text-base text-sm font-medium text-[#121212] ">Mensagem</label>
                        <textarea rows={5} placeholder="Digite sua mensagem aqui." className="border border-[#D3D3D3] rounded-lg px-2 py-1 text-[#121212] bg-white"></textarea>

                        <button className="2xl:text-lg sm:text-base text-sm bg-[#0ABAB5] rounded-lg py-1 mt-6 mb-4 text-white font-medium cursor-pointer transition-all duration-200 hover:scale-105">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}