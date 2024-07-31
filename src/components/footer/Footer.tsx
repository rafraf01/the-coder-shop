import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-600">
      <div className="mx-10 h-full">
        <div className="grid gap-5 py-6 font-urbanist sm:grid-cols-12">
          <div className="col-span-12 text-sm text-white lg:col-span-4">
            <h1 className="mb-5 font-climatecrisis text-2xl">
              <p>The</p>
              <p>React</p>
              <p>Shop</p>
            </h1>
            <p className="mb-0 font-urbanist text-xs uppercase sm:mb-10 font-thin">
              where fashion meets passion
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm text-white font-semibold">PRODUCT</h3>
            <div className="mt-5 text-xs">
              <p>Jackets</p>
              <p>Shirts</p>
              <p>Dresses</p>
              <p>Outwears</p>
              <p>Hats</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm text-white font-semibold">BUYING</h3>
            <div className="mt-5 text-xs">
              <p>Shop</p>
              <p>Term of use</p>
              <p>Privacy</p>
              <p>How it works</p>
              <p>Customer Service</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm text-white font-semibold">SOCIAL</h3>
            <div className="mt-5 text-xs">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Tiktok</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="mb-5 text-sm text-white font-semibold">JOIN OUR COMMUNITY</h3>
            <p className="text-xs mb-3">Get the latest news and articles to your inbox every month.</p>
            <label className="rounded-full border relative">
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className=" bg-transparent p-2 pl-[14px] text-sm placeholder:text-xs placeholder:text-gray-800 focus:outline-none"
              />
              <span className="absolute h-[30px] w-[30px] rounded-full right-1 bg-white text-center inset-y-0 my-auto flex justify-center items-center cursor-pointer">
                <FiSend className="text-xs" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
