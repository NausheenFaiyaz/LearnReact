import products from "./products.json";
import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product,i) => (
          <Product {...product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
