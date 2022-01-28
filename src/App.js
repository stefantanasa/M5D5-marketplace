import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ProductDetails from "./components/ProductDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
