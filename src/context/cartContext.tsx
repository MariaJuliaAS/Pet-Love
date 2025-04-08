import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../hooks";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItem: (newItem: ProductsProps) => void;
    removeItem: (removeItem: ProductsProps) => void;
    total: string;
}

interface CartProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState('')

    function addItem(newItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = [...cart]

            cartList[indexItem].amount += 1
            cartList[indexItem].subtotal = cartList[indexItem].price * cartList[indexItem].amount
            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        let data = {
            ...newItem,
            amount: 1,
            subtotal: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItem(removeItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === removeItem.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = [...cart]

            cartList[indexItem].amount -= 1
            cartList[indexItem].subtotal = cartList[indexItem].price * cartList[indexItem].amount
            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const removeProduct = cart.filter(item => item.id !== removeItem.id)
        setCart(removeProduct)
        totalResultCart(removeProduct)
    }

    function totalResultCart(items: CartProps[]) {
        let myCart = items;

        const result = myCart.reduce((acc, obj) => { return acc + obj.subtotal }, 0)
        const formatResult = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        setTotal(formatResult)
    }

    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItem, removeItem, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider