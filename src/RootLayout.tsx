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
    <>
      <Nav />
      <main>
        <Outlet context={{products}}/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
