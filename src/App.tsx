import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import CartProvider from './context/cartContext'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <CartProvider>
      <Toaster
        position="bottom-center"
      />
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
