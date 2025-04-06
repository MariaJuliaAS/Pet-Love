import imgRacao from '../../assets/racao1.png';
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export function FeaturedProducts() {
    return (
        <section id="featuredProducts" className="min-h-screen h-full w-full flex flex-col items-center justify-center px-12 py-7">

            <div className='flex flex-col items-center my-12'>
                <h1 className='2xl:text-5xl sm:text-4xl text-2xl text-[#0ABAB5] font-bold mb-3'>Produtos em Destaque</h1>
                <p className='2xl:text-xl sm:text-lg text-sm text-center text-[#808080]'>Veja os produtos mais vendidos para seus amados pets.</p>
            </div>

            <div className='2xl:my-12 my-6 lg:flex-row sm:gap-18 flex flex-col items-center justify-center gap-9'>
                <div className='bg-[#FFE8D6] rounded-xl p-4 cursor-pointer border border-[#d3d3d3] transition-all duration-200 ease-in-out hover:scale-110'>
                    <img src={imgRacao} alt="Picture of dog food" className='2xl:w-65 sm:w-60 rounded-lg w-50 mb-4' />
                    <h4 className='2xl:max-w-65 sm:max-w-60 max-w-50 font-xl font-semibold text-[#F66D21]'>Ração Premier Fórmula para Cães Sênior</h4>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg text-[#F66D21]'>R$ 250,00</p>
                        <button className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'>
                            <BsFillCartPlusFill size={25} color='#F66D21' />
                        </button>
                    </div>
                </div>

                <div className='bg-[#E6F8F7] rounded-xl p-4 cursor-pointer border border-[#d3d3d3] transition-all duration-200 ease-in-out hover:scale-110'>
                    <img src={imgRacao} alt="Picture of dog food" className='2xl:w-65 sm:w-60 rounded-lg w-50 mb-4' />
                    <h4 className='2xl:max-w-65 sm:max-w-60 max-w-50 font-xl font-semibold text-[#0ABAB5]'>Ração Premier Fórmula para Cães Sênior</h4>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg text-[#0ABAB5]'>R$ 250,00</p>
                        <button className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'>
                            <BsFillCartPlusFill size={25} color='#0ABAB5' />
                        </button>
                    </div>
                </div>

                <div className='bg-[#DCC8FF] rounded-xl p-4 cursor-pointer border border-[#d3d3d3] transition-all duration-200 ease-in-out hover:scale-110'>
                    <img src={imgRacao} alt="Picture of dog food" className='2xl:w-65 sm:w-60 rounded-lg w-50 mb-4' />
                    <h4 className='2xl:max-w-65 sm:max-w-60 max-w-50 font-xl font-semibold text-[#8A4FFF]'>Ração Premier Fórmula para Cães Sênior</h4>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg text-[#8A4FFF]'>R$ 250,00</p>
                        <button className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'>
                            <BsFillCartPlusFill size={25} color='#8A4FFF' />
                        </button>
                    </div>
                </div>
            </div>

            <button className='sm:text-xl sm:mt-12 mt-5 mb-5 bg-white border border-[#0ABAB5] rounded-lg px-3 py-2 text-[#0ABAB5] text-base font-semibold flex items-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'>
                Veja Todos os Produtos
                <IoIosArrowForward size={20} color='#0ABAB5' className='ml-3' />
            </button>

        </section>
    )
}