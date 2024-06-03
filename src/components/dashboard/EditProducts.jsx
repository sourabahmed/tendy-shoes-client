
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";


// const EditProducts = () => {
//   const products = useLoaderData();
//   console.log(products._id)

//   const [name, setName] = useState(products.name);
//   const [price, setPrice] = useState(products.price);
//   const [brand, setBrand] = useState(products.brand);
//   const [description, setDescription] = useState(products.description);
//   const [imageUrl, setImageUrl] = useState(products.imageUrl);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const brand = form.brand.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const imageUrl = form.imageUrl.value;

//     const data = { name, brand, price, description, imageUrl };
//     confirmEdit( data)

//   };

//   const confirmEdit = async(data) => {
//     const answer = window.confirm("Are you sure to Edit this Product?");
//     if(answer){
      
//       await fetch(`http://localhost:3000/products/${products._id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(`data from edit: ${data}`);
//       if(data){
//         toast.success('Product edited successfully!');
//       }
//     });
//     }
//   }

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold text-center">Edit Product</h1>

//       <div className="my-16">
//         <form onSubmit={handleSubmit}>
//           <div className="mt-2">
//             <input
//               className="input input-bordered input-accent w-full "
//               type="text"
//               name="name"
//               placeholder="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="input input-bordered input-accent w-full "
//               type="text"
//               name="brand"
//               placeholder="Brand"
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="input input-bordered input-accent w-full "
//               type="text"
//               name="price"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="input input-bordered input-accent w-full "
//               type="text"
//               name="description"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div className="mt-2">
//             <input
//               className="input input-bordered input-accent w-full "
//               type="text"
//               name="imageUrl"
//               placeholder="Image URL"
//               value={imageUrl}
//               onChange={(e) => setImageUrl(e.target.value)}
//             />
//           </div>
//           <div className="mt-2 flex justify-center items-center">
//             <input
//               className="input input-bordered input-accent w-full btn btn-active btn-accent "
//               type="submit"
//               value="Edit product"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProducts;


import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const products = useLoaderData();
  
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
    confirmEdit(data);
  };

  const confirmEdit = async (data) => {
    const answer = window.confirm("Are you sure to Edit this Product?");
    if (answer) {
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
          if (data) {
            toast.success('Product edited successfully!');
          }
        });
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="brand"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input input-bordered input-accent w-full p-4 rounded-md text-lg focus:ring-2 focus:ring-blue-500"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <div className="flex justify-center">
            <input
              type="submit"
              value="Edit Product"
              className="btn btn-primary w-full md:w-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
