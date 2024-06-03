import { useLoaderData } from "react-router-dom";


function ProductDetails() {
    const products = useLoaderData();

  const {description, imageUrl, price, name } = products;
  return (
    <div className="flex justify-center align-center m-10">
      <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={imageUrl} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </div>
    </div>
    </div>
  )
}

export default ProductDetails