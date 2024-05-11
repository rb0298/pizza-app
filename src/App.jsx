import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx"
import AppLayout from  "./ui/AppLayout"
import Order from "./features/order/Order";
import Error from  "./ui/Error"
import Menu from "./features/menu/Menu.jsx";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import { loader as menuLoader } from "./features/menu/Menu"
import { loader as orderLoader } from "./features/order/Order";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[  { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu />,loader: menuLoader,errorElement:<Error/> },
    { path: "/cart", element: <Cart /> },
    { path: "/order/:orderId", element: <Order />, loader:orderLoader ,errorElement:<Error/> },
    {path:"/order/new",element:<CreateOrder/>,action:createOrderAction }]
  }

  
  
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
  
  
}

export default App;
