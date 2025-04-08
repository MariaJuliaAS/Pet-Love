import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductsProps } from "../hooks";
import toast from "react-hot-toast";

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

    useEffect(() => {

        const cartProducts = () => {
            const stored = localStorage?.getItem('@productsPetLove')
            const cartItems: CartProps[] = stored ? JSON.parse(stored) : []
            return cartItems
        }

        setCart(cartProducts)

        const totalProducts = () => {
            const totalStored = localStorage.getItem('@totalProductsPetLove')
            const totalCart: string = totalStored ? JSON.parse(totalStored) : ''
            return totalCart
        }

        setTotal(totalProducts)

    }, [])

    function addItem(newItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = [...cart]

            cartList[indexItem].amount += 1
            cartList[indexItem].subtotal = cartList[indexItem].price * cartList[indexItem].amount
            setCart(cartList)
            totalResultCart(cartList)
            saveData(cartList)
            toast.success('Produto adicionado ao carrinho!')
            console.log(cart)
            return
        }

        let data = {
            ...newItem,
            amount: 1,
            subtotal: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
        saveData([...cart, data])
        toast.success('Novo produto adicionado ao carrinho!')
    }

    function removeItem(removeItem: ProductsProps) {
        const indexItem = cart.findIndex(item => item.id === removeItem.id)

        if (cart[indexItem]?.amount > 1) {
            let cartList = [...cart]

            cartList[indexItem].amount -= 1
            cartList[indexItem].subtotal = cartList[indexItem].price * cartList[indexItem].amount
            setCart(cartList)
            totalResultCart(cartList)
            saveData(cartList)
            toast.success('Quantidade atualizada!')
            return
        }

        const removeProduct = cart.filter(item => item.id !== removeItem.id)
        setCart(removeProduct)
        totalResultCart(removeProduct)
        saveData(removeProduct)
        toast.success('Produto removido do carrinho!')
    }

    function totalResultCart(items: CartProps[]) {
        let myCart = items;

        const result = myCart.reduce((acc, obj) => { return acc + obj.subtotal }, 0)
        const formatResult = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        setTotal(formatResult)
        localStorage.setItem('@totalProductsPetLove', JSON.stringify(formatResult))
    }

    function saveData(updateCart: CartProps[]) {
        localStorage.setItem('@productsPetLove', JSON.stringify(updateCart))
    }


    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, addItem, removeItem, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider