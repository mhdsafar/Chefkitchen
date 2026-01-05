import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import Menu from "./pages/Menu";
import Receipt from "./Components/Receipt";
import KitchenCenter from "./Components/KitchenCenter";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favourites";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import { OrderProvider } from "./context/OrderContext";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <OrderProvider>
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

          <Route path="/admin" element={<DashboardLayout/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
