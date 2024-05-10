import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx"
import AppLayout from  "./ui/AppLayout"
import Order from "./features/order/Order";
import Menu from "./features/menu/Menu.jsx";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import { loader as menuLoader } from "./features/menu/Menu"
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[  { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu />,loader: menuLoader },
    { path: "/cart", element: <Cart /> },
    { path: "/order/:orderId", element: <Order /> },
    {path:"/order/new",element:<CreateOrder/>}]
  }

  
  
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
  
  
}

export default App;
