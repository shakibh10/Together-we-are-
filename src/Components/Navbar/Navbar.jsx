import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const{user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('User logged out successfuly');
        })
        .catch(error=>{
            console.error(error);
        })
    }

const navlinks=<>

      <li><NavLink className="mr-2" to="/">Home</NavLink></li>
      <li><NavLink className="mr-2" to="/login">Login</NavLink></li>
      <li><NavLink className="mr-2" to="/signup">Sign Up</NavLink></li>
      <li><NavLink className="mr-2" to="/orders">Order</NavLink></li>

      { user &&
            <>
                <li><NavLink className="mr-2" to="/purchased">Purchased</NavLink></li>
               <li><NavLink className="mr-2" to="/dashboard">Dashboard</NavLink></li>
     
            </>

      }
</>

    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><span className="text-red-400 ">Uru</span>Citthi</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user && <span>{user.email}</span>
    }
    <a onClick={handleLogOut} className="btn">Sign Out</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;