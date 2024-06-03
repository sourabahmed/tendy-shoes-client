
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Allproduct = ({ product, onDelete }) => {
  const { _id, name, brand, price, description, imageUrl } = product;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onDelete(_id);
        if (_id) {
          toast.success('Product deleted successfully!');
        }
      });
  };

  const confirmDelete = () => {
    const answer = window.confirm("Are you sure you want to delete this product?");
    if (answer) {
      handleDelete();
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <figure>
        <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      </figure>
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-2">{name}</h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{brand}</h3>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">${price}</h3>
        <p className="text-gray-700 text-base mb-4">
          {description.length > 40 ? `${description.slice(0, 40)}...` : description}
        </p>
        <div className="flex justify-around">
          <Link to={`/products/${_id}`} className="btn bg-indigo-500 text-white px-4 py-2 rounded">
            See details
          </Link>
          <Link to={`edit/${_id}`} className="btn bg-green-600 text-white px-4 py-2 rounded">
            Edit
          </Link>
          <button onClick={confirmDelete} className="btn bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
