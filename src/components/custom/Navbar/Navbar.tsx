import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const navItems = (
    <>
      <li className=" hover:bg-white">
        <NavLink className=" hover:bg-white" to="/all-products">
          All Products
        </NavLink>
      </li>
      <li className=" hover:bg-white">
        <NavLink className=" hover:bg-white" to="/manage-products">
          Manage Products
        </NavLink>
      </li>
      <li className=" hover:bg-white">
        <NavLink className=" hover:bg-white" to="/about-us">
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu text-base menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl xl:text-2xl font-semibold">
          SPORTIZE
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-base menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-5 items-center">
        <Link to="cart">
          <BsCart3 className="text-2xl" />
        </Link>
        <div>
          <RxAvatar className="text-4xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
