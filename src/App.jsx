import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import Menu from "./pages/Menu";
import Receipt from "./Components/Receipt";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/kitchen" element={<Menu />} />

          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
