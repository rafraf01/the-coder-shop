import { FaCartShopping } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import Button from "../button/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RefObject, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

const Nav = () => {
  const navigationMenu = ["Home", "Products", "About"];
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const ref = useClickAway(() => setExpanded(false)) as RefObject<HTMLDivElement>;

  return (
    <nav className="navigation-wrapper sticky top-0 z-[100] w-full bg-white px-6 py-4">
      <div className="relative flex w-full items-center justify-between rounded-3xl border-[1px] border-gray-400 bg-white px-4 py-2">
        <CgMenuRightAlt className="block cursor-pointer xl:hidden" onClick={() => setExpanded(!expanded)} />
        {expanded && (
          <div className="absolute left-0 top-14 flex flex-col gap-5 rounded-xl border bg-white p-10 shadow-xl" ref={ref}>
            {navigationMenu.map((nav) => {
              const link =
                nav.toLowerCase() === "home" ? "" : nav.toLowerCase();
              return (
                <NavLink
                  key={nav}
                  onClick={() => setExpanded(false)}
                  to={link}
                  className={({ isActive }) =>
                    `${isActive && "text-black underline underline-offset-4"} font-urbanist`
                  }
                >
                  {nav}
                </NavLink>
              );
            })}
          </div>
        )}

        <div className="nav-left-item stroke-text cursor-pointer font-climatecrisis text-sm font-semibold text-transparent md:text-xl">
          <Link to={"/"}>The React Shop</Link>
        </div>
        <div className="relative">
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
          <Button
            className="cursor-pointer rounded-full border-[1px] px-4 py-2 font-urbanist hover:border-stone-400 hover:bg-gray-200/30 hover:text-stone-400"
            onClick={() => navigate("login")}
          >
            Sign in
          </Button>
          <FaCartShopping className="hover:text-stone-400 xl:hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
