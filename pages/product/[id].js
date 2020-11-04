import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const [product, setProduct] = useState({});

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    id &&
      fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Esta es la pagina del producto: {id}</h1>
      <div>{product.name}</div>
    </div>
  );
};

export default ProductItem;
