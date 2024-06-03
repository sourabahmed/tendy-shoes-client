
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
        if(_id){
          toast.success('Product deleted successfully!');
        }
      });
  };

  const confirmDelete = () => {
    const answer = window.confirm("Are you sure delete Product?")
    if(answer){
      handleDelete()
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl flex flex-wrap justify-center gap-4">
      <figure>
        <img src={imageUrl} alt="This is a shoe" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">$: {price}</h3>
        <p>{description.slice(0, 40)}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={confirmDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allproduct;