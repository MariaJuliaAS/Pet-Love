import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import CartProvider from './context/cartContext'

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
