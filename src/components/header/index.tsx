import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function Header() {
    const { cartAmount } = useContext(CartContext)

    return (
        <header className=" w-full flex px-1 bg-white border-b border-gray-300 h-16 sticky top-0 z-10">

            <nav className="w-full max-w-yxl flex items-center justify-between px-5 mx-auto">
                <a href="/#start"
                    className="sm:text-3xl md:text-4xl font-bold text-2xl text-[#0ABAB5] select-none">
                    Pet Love
                </a>

                <div className="hidden sm:text-xl sm:gap-5 md:text-xl sm:flex items-center gap-2 select-none text-[#121212] font-medium text-base">
                    <a href="/#featuredProducts" className="transition-all duration-200 ease-in-out hover:scale-105">Produtos</a>
                    <a href="/#ourServices" className="transition-all duration-200 ease-in-out hover:scale-105">Serviços</a>
                    <a href="/#about" className="transition-all duration-200 ease-in-out hover:scale-105">Sobre</a>
                    <a href="/#clients" className="transition-all duration-200 ease-in-out hover:scale-105">Depoimentos</a>
                    <a href="/#contact" className="transition-all duration-200 ease-in-out hover:scale-105">Contato</a>
                </div>

                <Link to="/cart" className="sm:ml-8 relative">
                    <IoMdCart size={26} color="#121212" />
                    {cartAmount > 0 && (
                        <span className=" bg-[#F66D21] rounded-full w-5 h-5 flex items-center justify-center text-white text-base absolute -right-2 -top-2">{cartAmount}</span>
                    )}
                </Link>
            </nav>

        </header>
    )
}