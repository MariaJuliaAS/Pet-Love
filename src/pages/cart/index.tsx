import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export function Cart() {
    const { cart, addItem, removeItem, total } = useContext(CartContext)

    return (
        <main className="w-full max-w-10/12 mx-auto min-h-screen">
            <h1 className="2xl:text-4xl sm:text-3xl text-2xl font-bold text-[#121212] my-4 text-center">Meu Carrinho</h1>

            {cart.length === 0 && (
                <div className='flex flex-col items-center my-7'>
                    <p className='font-medium text-xl text-[#121212]'>Nenhum produto no carrinho!</p>
                    <Link to='/products' className='bg-[#121212] my-3 p-1 px-3 text-white rounded-lg transition-all duration-200 hover:scale-105'>
                        Acessar Produtos
                    </Link>
                </div>
            )}

            {cart.map((item) => (
                <section key={item.id} className='sm:flex-row flex-col flex items-center justify-between border-b-1 border-[#D3D3D3] mb-4'>
                    <img src={item.cover} alt={item.title} className='w-28 mb-3' />
                    <strong className='mb-3'>Preço: {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</strong>

                    <div className='flex flex-row gap-3 mb-3'>
                        <button className='px-2 bg-[#121212] rounded-lg text-white flex items-center justify-center cursor-pointer' onClick={() => removeItem(item)} >-</button>
                        {item.amount}
                        <button className='px-2 bg-[#121212] rounded-lg text-white flex items-center justify-center cursor-pointer' onClick={() => addItem(item)}>+</button>
                    </div>

                    <strong>Subtotal: {item.subtotal.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</strong>
                </section>
            ))}

            {cart.length !== 0 && (
                <strong>Total: {total}</strong>
            )}

        </main>
    )
}