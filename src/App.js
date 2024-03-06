import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./Products";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowProduct from "./ShowProduct";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="products" element={<Products />}></Route>
            <Route path="products/:id" element={<ShowProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
