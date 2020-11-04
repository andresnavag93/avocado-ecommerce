import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Welcome to Next.js</h1>
      {productList.map((product) => (
        <div>
          {product.name} {product.id}
        </div>
      ))}
    </div>
  );
};

export default Home;
