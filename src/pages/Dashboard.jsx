import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  return (
    // <div>
    //   <div className="flex justify-between mb-7">
    //     <h1 className="text-3xl ">Profile Information</h1>
        // <Link
        //   to={`/dashboard/profile/edit/${userInfo?._id}`}
        //   className="btn btn-neutral btn-md"
        // >
        //   Edit Profile
        // </Link>
    //   </div>
    //   <div>
    //     <h1>{userInfo?.name}</h1>
    //     <h1>{userInfo?.email}</h1>
    //   </div>
    // </div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            
            <div>
              <div className="font-bold">{userInfo?.name}</div>
              <div className="text-sm opacity-50">Age: {userInfo?.age} </div>
            </div>
          </div>
        </td>
        <td>
          {userInfo?.email}
          <br/>
        </td>
        <td>{userInfo?.mobileNumber}</td>
        <th>
          <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-ghost btn-xs"
        >
          Edit Profile
        </Link>
        </th>
      </tr>
      
    </tbody>
    
  </table>
</div>
  );
};

export default Dashboard;