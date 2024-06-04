
import { useEffect, useState } from "react";
import Singleproduct from "./Singleproduct";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tendy-shoes-server-h361.vercel.app/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    setProducts(products.filter((product) => product._id !== _id || product._id === ""));
  };

  return (
    <div className="flex justify-center flex-wrap" >
      <h1 className="text-4xl m-5 font-bold text-center">All Products</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {products.map((product) => (
          <Singleproduct
            key={product._id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Allproducts;