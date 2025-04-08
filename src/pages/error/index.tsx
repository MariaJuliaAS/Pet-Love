import { Link } from "react-router-dom";


export function ErrorPage() {
    return (
        <main className="w-full min-h-screen flex justify-center">
            <div className="flex flex-col items-center">
                <h1 className="mt-16 mb-3 text-[#121212] font-bold text-7xl" >404</h1>
                <p className="text-[#121212] font-medium">Erro ao encontrar página!</p>
                <Link to='/' className='bg-[#121212] my-3 p-1 px-3 text-white rounded-lg mt-7 transition-all duration-200 hover:scale-105'>
                    Voltar a página inicial
                </Link>
            </div>
        </main>
    )
}