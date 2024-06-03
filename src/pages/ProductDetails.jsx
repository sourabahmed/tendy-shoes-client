import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const product = useLoaderData();
  const { description, imageUrl, price, name } = product;

  return (
    <div className="flex justify-center items-center m-10">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <figure>
          <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-xl font-semibold text-gray-900 mb-4">${price}</p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
