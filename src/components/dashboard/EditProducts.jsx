
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const EditProducts = () => {
  const products = useLoaderData();
  console.log(products._id)

  const [name, setName] = useState(products.name);
  const [price, setPrice] = useState(products.price);
  const [brand, setBrand] = useState(products.brand);
  const [description, setDescription] = useState(products.description);
  const [imageUrl, setImageUrl] = useState(products.imageUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;

    const data = { name, brand, price, description, imageUrl };
    confirmEdit( data)

  };

  const confirmEdit = async(data) => {
    const answer = window.confirm("Are you sure to Edit this Product?");
    if(answer){
      
      await fetch(`http://localhost:3000/products/${products._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(`data from edit: ${data}`);
      if(data){
        toast.success('Product edited successfully!');
      }
    });
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent w-full "
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent w-full "
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent w-full "
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent w-full "
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent w-full "
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="input input-bordered input-accent w-full btn btn-active btn-accent "
              type="submit"
              value="Edit product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;