import { GetApi } from "../../hooks";
import { RandomColors } from "../../utils";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

export function Products() {
    const { products } = GetApi();
    const { bgColors, randomBgColors, randomTextColors, textColors } = RandomColors();

    return (
        <main className="w-full max-w-10/12 mx-auto min-h-screen">
            <h1 className="2xl:text-4xl sm:text-3xl text-2xl font-bold text-[#121212] my-4 text-center">Todos os Produtos</h1>

            <section className="lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-12 place-items-center my-7">
                {products?.map((item, index) => (
                    <Link to='/' key={item.id} style={{ backgroundColor: randomBgColors[index % bgColors.length] }} className='2xl:max-w-85 sm:max-w-75 max-w-70 rounded-xl p-4 cursor-pointer border border-[#d3d3d3] transition-all duration-200 ease-in-out hover:scale-110'>
                        <img src={item.cover} alt={item.title} className='rounded-lg mb-4' />
                        <h4 className='font-xl font-semibold' style={{ color: randomTextColors[index % textColors.length] }}>{item.title}</h4>
                        <div className='flex justify-between my-4'>
                            <p className='text-lg' style={{ color: randomTextColors[index % textColors.length] }}>{item.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</p>
                            <button className='cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'>
                                <BsFillCartPlusFill size={25} style={{ color: randomTextColors[index % textColors.length] }} />
                            </button>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}