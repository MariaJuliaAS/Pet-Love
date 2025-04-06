import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export function Header() {
    return (
        <header className="w-full flex px-1 bg-white border-b border-gray-300 h-20 sticky top-0">

            <nav className="w-full max-w-yxl flex items-center justify-between px-5 mx-auto">
                <a href="#start"
                    className="sm:text-3xl md:text-4xl font-bold text-2xl text-[#0ABAB5] select-none">
                    Pet Love
                </a>

                <div className="sm:text-xl sm:gap-5 md:text-2xl flex items-center gap-2 select-none text-[#121212] font-medium text-base">
                    <a href="#featuredProducts" className="transition-all duration-200 ease-in-out hover:scale-105">Produtos</a>
                    <a href="#ourServices" className="transition-all duration-200 ease-in-out hover:scale-105">Serviços</a>
                    <a href="#about" className="transition-all duration-200 ease-in-out hover:scale-105">Sobre</a>
                    <a href="#contact" className="transition-all duration-200 ease-in-out hover:scale-105">Contato</a>

                    <Link to="/cart" className="sm:ml-8 relative">
                        <IoMdCart size={30} color="#121212" />
                        <span className=" bg-[#F66D21] rounded-full w-6 h-6 flex items-center justify-center text-white text-lg absolute -right-3 -top-3">2</span>
                    </Link>
                </div>
            </nav>

        </header>
    )
}