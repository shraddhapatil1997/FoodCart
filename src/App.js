import "./App.css";
import { Header } from "./Componants/Header";
import { Footer } from "./Componants/Footer";
import { AddedItems } from "./Componants/AddedItems";
import { Route, Router, Routes } from "react-router-dom";
import { Home } from "./Componants/Home";




function App() {
  
return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/cartItems"
          element={<AddedItems/>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
