import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { name, _id, description, price, imageUrl } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-8">
      <figure>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-4">
          {description.length > 60 ? `${description.slice(0, 60)}...` : description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-bold text-lg">${price}</span>
          <Link to={`/products/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
