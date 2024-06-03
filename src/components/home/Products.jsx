import { useEffect, useState } from "react";
import Product from "../home/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue)
  
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
        <div className="text-center">
        <input onChange={e => setSearchValue(e.target.value)} type="text" placeholder="Search shoes here" className="input input-bordered input-info w-full max-w-xs m-5 justify-center" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
      {products?.filter((product) => {
        return searchValue?.toLowerCase() === " " ? product : product?.name?.toLowerCase()?.includes(searchValue)
      }) .map((product) =>  <Product product={product} key={product._id}/>)}
      </div>
      </div>
    </>
  )
}

export default Products