import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import ChefKitchen from "./pages/ChefKitchen";



function App() {
  return(
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/kitchen" element={<ChefKitchen />} />

    </Routes>
     </BrowserRouter>
  );
  
}

export default App;
