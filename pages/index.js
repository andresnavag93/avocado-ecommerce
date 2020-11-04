import { useState, useEffect } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js</h1>
      {productList.map((product) => (
        <div key={product.id}>
          {product.name} {product.id}
        </div>
      ))}
    </div>
  );
};

export default Home;
