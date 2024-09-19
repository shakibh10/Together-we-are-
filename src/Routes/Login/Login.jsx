import { useContext, useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const[showpass,setShowpass]=useState(false);

    const{signUser,signInWithGoogle}=useContext(AuthContext);

    const navigate=useNavigate();

    const handleSignIn=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

       console.log(email,password);


        signUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error=>{
            console.errro(error);
        })

    }


    const handleGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }


    return (
        <div>
           <div className="hero bg-purple-300 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Login to get something mystrious
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <div className="flex items-center relative">
          <input 
                type={showpass? "text":"password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required />

                <span className="absolute right-2" onClick={()=>setShowpass(!showpass)}>
                    {
                        
                            showpass?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
    
                    }
                </span>

          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p > Have not registered yet? <Link to="/signup">Sign Up</Link></p>
      
      <button  className="mt-4 btn btn-ghost" onClick={handleGoogle} >Google</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;