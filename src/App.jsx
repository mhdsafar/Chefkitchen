import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import Menu from "./pages/Menu";
import Receipt from "./Components/Receipt";
import KitchenCenter from "./Components/KitchenCenter";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favourites";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import DashboardLayout from "./layouts/DashboardLayout";
import Category from "./pages/Admin/Category";
import Products from "./pages/Admin/Products";
import Order from "./pages/Admin/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/menu" element={<Menu />}>
          <Route index element={<KitchenCenter />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        <Route path="/receipt" element={<Receipt />} />

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
