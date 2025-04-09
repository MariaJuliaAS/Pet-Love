import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ProductsProps } from "../../hooks";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function Details() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState<ProductsProps>()
    const { addItem } = useContext(CartContext)

    useEffect(() => {

        async function GetApi() {
            const response = await api.get(`/products/${id}`)
            setProductDetail(response.data)
        }

        GetApi();

    }, [])

    return (
        <main className="w-full max-w-10/12 mx-auto min-h-screen">
            {productDetail && (
                <section className="md:flex-row flex flex-col items-center gap-4 mt-12">
                    <div>
                        <img src={productDetail?.cover} alt={productDetail?.title} className="md:w-96 md:max-w-96 w-80 max-w-80" />
                    </div>

                    <div>
                        <h1 className="2xl:text-4xl sm:text-3xl text-2xl text-[#121212] font-bold mb-3">{productDetail?.title}</h1>
                        <p className="2xl:text-lg sm:text-base text-sm text-[#808080]">{productDetail?.description}</p>

                        <div className="md:justify-start justify-between items-center mt-3 flex gap-12">
                            <strong>{productDetail?.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</strong>

                            <Link to='/cart' onClick={() => addItem(productDetail)} className="bg-[#121212] p-1 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">
                                <BsFillCartPlusFill size={20} color="#fff" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}