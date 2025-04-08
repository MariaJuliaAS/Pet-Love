import { createContext, ReactNode, useState } from "react";
import { ProductsProps } from "../hooks";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItem: (newItem: ProductsProps) => void;
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

    function addItem(newItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = cart

            cartList[indexItem].amount += 1
            cartList[indexItem].subtotal = cartList[indexItem].price * cartList[indexItem].amount
            setCart(cartList)
            return
        }

        let data = {
            ...newItem,
            amount: 1,
            subtotal: newItem.price
        }

        setCart(products => [...products, data])
    }

    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider