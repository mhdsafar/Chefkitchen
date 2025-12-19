import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import ChefKitchen from "./pages/ChefKitchen";
import Receipt from "./Components/Receipt";

// TODO: Rewirite the route and component name Meaning full one [eg: ❌ kitchen --> ✅ menu , ChefKitchen ---> Menu or ProductList]


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
