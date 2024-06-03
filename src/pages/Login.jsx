
import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";


function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const from = location?.state?.from?.pathname || "/";

    const { user, googleLogin, signIn } = useAuth();
    const hanldleGoogleLogin = (e) => {
        e.preventDefault();
        googleLogin().then((data) => {
          if (data?.user?.email) {
            const userInfo = {
              email: data?.user?.email,
              name: data?.user?.displayName,
            };
            fetch("https://localhost:3000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
          }
        });
    }

    const handleSUbmit = async (e) => {
      e.preventDefault();

      console.log(email, password);
  
      await signIn(email, password);
    };

    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, from, navigate]);

  return (
    <>
    <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSUbmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <Link to={"/register"} className="label-text-alt link link-hover">Don't have an account? Register</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={hanldleGoogleLogin} className="btn btn-secondary mt-3">Login with Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Login



