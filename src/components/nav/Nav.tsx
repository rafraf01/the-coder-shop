import { FaCartShopping } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import Button from "../button/Button";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navigationMenu = ["Home", "Products", "About"];
  return (
    <nav className="navigation-wrapper sticky top-0 z-[100] w-full bg-white px-6 py-4">
      <div className="flex w-full items-center justify-between rounded-3xl border-[1px] border-gray-400 bg-white px-4 py-2">
        <CgMenuRightAlt className="block cursor-pointer xl:hidden" />
        <div className="nav-left-item cursor-pointer font-climatecrisis text-xl stroke-text text-transparent font-semibold">
          <Link to={"/"}>The React Shop</Link>
        </div>
        <div className="">
          <ul className="hidden flex-col items-center gap-10 text-xl xl:flex xl:flex-row">
            {navigationMenu.map((nav) => {
              const link =
                nav.toLowerCase() === "home" ? "" : nav.toLowerCase();
              return (
                <li
                  key={nav}
                  className="relative z-10 font-urbanist hover:text-stone-400 xl:hover:cursor-pointer"
                >
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `${isActive && "text-black underline underline-offset-4"}`
                    }
                  >
                    {nav}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button className="cursor-pointer rounded-full border-[1px] px-4 py-2 font-urbanist hover:border-stone-400 hover:bg-gray-200/30 hover:text-stone-400">
            Sign in
          </Button>
          <FaCartShopping className="hover:text-stone-400 xl:hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
