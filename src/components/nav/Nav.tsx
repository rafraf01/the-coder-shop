import { FaCartShopping } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import Button from "../button/Button";

const Nav = () => {
  const navigationMenu = ["Home", "Products", "About"];
  return (
    <nav className="navigation-wrapper z-[100] px-6 py-4 w-full sticky top-0 bg-white">
      <div className="flex justify-between w-full rounded-3xl border-[1px] py-2 px-4 border-gray-400 items-center bg-white">
        <CgMenuRightAlt className="xl:hidden block cursor-pointer" />
        <div className="nav-left-item cursor-pointer font-climatecrisis font-light text-xl">
          <p>Budol Shop</p>
        </div>
        <div className="">
          <ul
            className="hidden xl:flex flex-col gap-10 xl:flex-row items-center text-xl"
          >
            {navigationMenu.map((nav) => (
              <li
                key={nav}
                className="relative z-10 mix-blend-difference text-white font-urbanist xl:hover:cursor-pointer hover:text-stone-400"
              >
                <a>{nav}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Button className="border-[1px] rounded-full py-2 px-4 font-urbanist cursor-pointer hover:bg-gray-200/30 hover:border-stone-400 hover:text-stone-400">Sign in</Button>
          <FaCartShopping className="xl:hover:cursor-pointer hover:text-stone-400" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
