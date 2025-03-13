import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Styles/Global.css"
import App from "./Components/Routes/App.jsx";
//import react slick styles
import "./Styles/Slick.css";
import ProductFetchProvider from "./API/ProductFetch";
import SidebarProvider from "./Components/Cart/Sidebar";
import CartProvider from "./Components/Cart/Cart";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SidebarProvider>
      <ProductFetchProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductFetchProvider>
    </SidebarProvider>
  </CartProvider>
);
