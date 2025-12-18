import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import ChefKitchen from "./pages/ChefKitchen";
import Receipt from "./Components/Receipt";



function App() {
  return(
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/kitchen" element={<ChefKitchen />} />
      <Route path="/receipt" element={<Receipt />} />


    </Routes>
     </BrowserRouter>
  );
  
}

export default App;
