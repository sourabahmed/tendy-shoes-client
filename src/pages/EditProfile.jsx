// import { useLoaderData } from "react-router-dom";

// export default function EditProfile() {
//   const data = useLoaderData();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const name = form.name.value;

//     const age = form.age.value;
//     const mobileNumber = form.mobileNumber.value;

//     const userData = {
//       name,
//       age,
//       mobileNumber,
//       //   email: data?.email,
//     };

//     fetch(
//       `http://localhost:3000/user/${data?.email}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };
//   return (
//     <div>
//       <h1 className="text-3xl mb-7">Edit Profile </h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
//         <div className="flex flex-col">
//           <label htmlFor="">User Name</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={data?.name}
//             className="py-2 px-1 bg-slate-50 "
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="">User email</label>
//           <input
//             type="text"
//             value={data?.email}
//             disabled
//             name="email"
//             className="py-2 px-1 bg-slate-50 "
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="">User Age</label>
//           <input type="text" name="age" className="py-2 px-1 bg-slate-50 " />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="">User Mobile</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             className="py-2 px-1 bg-slate-50 "
//           />
//         </div>
//         <div className="flex flex-col">
//           <input
//             type="submit"
//             value="Update Profile"
//             className="py-2 px-1 bg-slate-950 text-white "
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const userData = {
      name,
      age,
      mobileNumber,
      //   email: data?.email,
    };

    fetch(
      `http://localhost:3000/user/${data?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if(data){
            toast.success("Profile updated")
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl mb-7">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2">
              User Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data?.name}
              className="py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-bold text-gray-700 mb-2">
              User Email
            </label>
            <input
              type="text"
              value={data?.email}
              disabled
              name="email"
              className="py-2 px-3 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm font-bold text-gray-700 mb-2">
              User Age
            </label>
            <input
              type="text"
              name="age"
              className="py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobileNumber" className="text-sm font-bold text-gray-700 mb-2">
              User Mobile
            </label>
            <input
              type="text"
              name="mobileNumber"
              className="py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
