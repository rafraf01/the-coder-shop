import CartLoader from "../../assets/gif/loader.gif";
const Loader = () => {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 m-auto h-72 w-72">
      <img
        src={CartLoader}
        alt="loading"
        className="object-cover w-auto m-auto z-[99999] h-full"
      />
    </div>
  );
};

export default Loader;
