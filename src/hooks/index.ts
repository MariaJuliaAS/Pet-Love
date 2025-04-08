import { useEffect, useState } from "react";
import { api } from "../services/api";

interface ProductsProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function GetApi() {
    const [products, setProducts] = useState<ProductsProps[]>()

    useEffect(() => {
        async function LoadingApi() {
            const response = await api.get('/products')
            setProducts(response.data)
        }

        LoadingApi()
    }, [])

    return { products }

}