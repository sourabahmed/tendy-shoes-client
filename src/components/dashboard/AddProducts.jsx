



import toast from "react-hot-toast";

const AddProducts = () => {
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;

    const data = { name, brand, price, description, imageUrl };
    confirmAdd(data, form);
  };

  const confirmAdd = async (data, form) => {
    const answer = window.confirm("Are you sure you want to add this product?");
    if (answer) {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset();
          if (data) {
            toast.success('Product added successfully!');
          }
        });
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Add a Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="brand"
            placeholder="Brand"
            required
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            required
          />
          <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary w-full md:w-auto"
          >
            Add Product
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
