import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import defaultAvatar from "../../assets/6596121.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black lg:p-4 border-2 border-black"
              : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add_products"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black lg:p-4 border-2 border-black"
              : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
          }
        >
          ADD PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-black lg:p-4 border-2 border-black mr-2"
              : "border-2 border-black  hover:bg-black lg:p-4 hover:text-white"
          }
        >
          MY CART
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          <Link>
            <button
              onClick={handleSignOut}
              className="p-3 bg-blue-600 text-white"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="p-3 bg-blue-600 text-white">Login</button>
          </Link>
        )}
      </li>
      {user?.email && <li>{user?.displayName}</li>}
      {user?.photoURL !== null ? (
        <li className="w-12 rounded-full">
          <img src={user?.photoURL} alt="" />
        </li>
      ) : (
        <li className="w-12 rounded-full">
          <img src={defaultAvatar} alt="" />
        </li>
      )}
    </>
  );
  return (
    <div className="navbar justify-between text-white lg:text-black bg-white shadow-lg">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn text-black btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="text-left gap-2 flex items-center">
          <Link to="/">
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
          </Link>
          <h2 className="text-3xl font-extrabold">YZ STORE</h2>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-4  px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
