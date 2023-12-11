import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./routes/home/homepage.component";
import ShopPage from "./routes/shop/shoppage.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
