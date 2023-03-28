import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar count={count}/>
      <Header />
      <ProductList count={count} setCount={setCount} />
      <Footer />
    </div>
  );
}

export default App;
