import { useEffect, useState } from "react";
import Product from "../home/Product";

function Products() {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data?.slice(0, 6)));
  }, []);

  console.log(products)
  return (
    <>
      <div>
        <h1 className="text-4xl text-center bold p-4">Products</h1>
        <div className="flex flex-wrap justify-center gap-4">
      {products?.map((product) => <Product product={product} key={product._id}/>)}
      </div>
      </div>
    </>
  )
}

export default Products