import imgRacao from '../../assets/racao1.png';

export function Cart() {
    return (

        <main className="w-full max-w-10/12 mx-auto min-h-screen">
            <h1 className="2xl:text-4xl sm:text-3xl text-2xl font-bold text-[#121212] my-4 text-center">Meu Carrinho</h1>

            <section className='sm:flex-row flex-col flex items-center justify-between border-b-1 border-[#D3D3D3] mb-4'>
                <img src={imgRacao} alt="Picture of pet food" className='w-28 mb-3' />
                <strong className='mb-3'>Preço: R$ 250</strong>

                <div className='flex flex-row gap-3 mb-3'>
                    <button className='px-2 bg-[#121212] rounded-lg text-white flex items-center justify-center cursor-pointer'>-</button>
                    2
                    <button className='px-2 bg-[#121212] rounded-lg text-white flex items-center justify-center cursor-pointer'>+</button>
                </div>

                <strong>Subtotal: R$500</strong>
            </section>

        </main>

    )
}