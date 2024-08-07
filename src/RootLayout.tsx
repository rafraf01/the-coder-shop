import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { useProduct } from "./components/hooks/useProductQuery";
import Footer from "./components/footer/Footer";

const Layout = () => {
  const { isLoading, data: products = [] } = useProduct();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col h-[100%]">
      <Nav />
      <main className="wrapper flex-[1_0_auto] items-stretch">
        <Outlet context={{products}}/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
