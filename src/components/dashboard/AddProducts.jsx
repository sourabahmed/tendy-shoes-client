import toast from "react-hot-toast";


const AddProducts = () => {

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
      const imageUrl = form.imageUrl.value;
  
      const data = { name, brand, price, description, imageUrl };
      confirmAdd(data, form)

    };

    const confirmAdd = async (data, form) => {
      const answer = window.confirm("Are you sure you want ot add Product");
      if(answer) {
        await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset();
          if(data){
            toast.success('Product added successfully!');
          }
        });
      }
    }

  
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">Add a Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="input input-bordered input-accent w-full"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="input input-bordered input-accent w-full"
                type="text"
                name="brand"
                placeholder="Brand"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="input input-bordered input-accent w-full"
                type="text"
                name="price"
                placeholder="Price"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="input input-bordered input-accent w-full"
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </div>
            <div className="mt-2">
              <input
                className="input input-bordered input-accent w-full"
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="input input-bordered input-accent w-full btn btn-active btn-accent"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddProducts;