import imgWoman1 from "../../assets/woman1.jpg";
import imgWoman2 from "../../assets/woman2.jpg";
import imgMen from "../../assets/men.jpg";

export function ClientsSection() {
    return (
        <section id="clients" className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5]">
            <div className="bg-[#FFD2E4] w-full px-12 py-7 flex flex-col items-center justify-center">

                <div className="flex flex-col items-center ">
                    <h1 className="2xl:text-5xl md:max-w-4xl sm:text-3xl text-2xl font-bold text-[#FF3C8A] mb-3 text-center">O Que Nossos Clientes Dizem</h1>
                    <p className="md:max-w-2xl 2xl:text-xl sm:text-lg text-sm text-[#808080] text-center">Não acredite apenas em nossa palavra. Veja o que os donos de pets têm a dizer sobre nós.</p>
                </div>

                <div className="lg:grid-cols-3 md:gap-12 mt-7 grid grid-cols-1 gap-6">
                    <article className="bg-[#E6F8F7] border border-[#D3D3D3] rounded-xl py-2 px-4 flex flex-col items-center">
                        <img src={imgWoman1} alt="Picture of Woman" className="rounded-full object-cover w-16 h-16" />
                        <h4 className="sm:text-lg text-[#0ABAB5] font-medium text-base">Juline Mendonza</h4>
                        <span className="sm:text-sm text-[#A1A1A1] text-xs mb-3">Dona de Cachorro</span>
                        <blockquote className="sm:text-base text-[#808080] text-sm max-w-64 text-center">"O serviço de banho e tosa é excepcional! Meu Golden Retriever sempre volta lindo e cheiroso."</blockquote>
                    </article>
                    <article className="bg-[#DCC8FF] border border-[#D3D3D3] rounded-xl py-2 px-4 flex flex-col items-center">
                        <img src={imgWoman2} alt="Picture of Woman" className="rounded-full object-cover w-16 h-16" />
                        <h4 className="sm:text-lg text-[#8A4FFF] font-medium text-base">Sarah Aline</h4>
                        <span className="sm:text-sm text-[#A1A1A1] text-xs mb-3">Dona de Gato</span>
                        <blockquote className="sm:text-base text-[#808080] text-sm max-w-64 text-center">"Compro todos os suprimentos para meu gato aqui há anos. Ótima seleção e a equipe é sempre prestativa."</blockquote>
                    </article>
                    <article className="bg-[#FFEC8A] border border-[#D3D3D3] rounded-xl py-2 px-4 flex flex-col items-center">
                        <img src={imgMen} alt="Picture of Woman" className="rounded-full object-cover w-16 h-16" />
                        <h4 className="sm:text-lg text-[#E9C400] font-medium text-base">Rodrigo Dera</h4>
                        <span className="sm:text-sm text-[#A1A1A1] text-xs mb-3">Múltiplos Pets</span>
                        <blockquote className="sm:text-base text-[#808080] text-sm max-w-64 text-center">"De peixes a coelhos, eles têm tudo o que preciso para todos os meus pets. A loja completa que eu procurava!"</blockquote>
                    </article>
                </div>
            </div>
        </section>
    )
}