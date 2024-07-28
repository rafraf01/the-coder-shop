import { useEffect, useState } from "react";

const InPageMenu = ({ menu }: { menu: string[] }) => {
  const [menus, setMenu] = useState(menu);

  useEffect(() => {
    setMenu(menu);
  }, [menu]);
	
  return (
    <section className="grid place-items-center auto-cols-auto">
      <ul className="flex gap-2 text-center">
        {menus.map((menu: string) => {
          return (
            <li
              className="cursor-pointer rounded-full border-slate-700 bg-white px-5 py-2 md:text-sm text-xs text-slate-700 shadow-slate-700 drop-shadow-lg"
              key={menu}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InPageMenu;
