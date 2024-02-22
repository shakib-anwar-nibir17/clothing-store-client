import useProducts from "../../Hooks/useProducts";
import About from "./About/About";
import Banner from "./Banner/Banner";
import GetApp from "./GetApp/GetApp";
import ProductSection from "./ProductSection/ProductSection";
import Review from "./Reviews/Reviews";
import Services from "./Services/Services";

const Homepage = () => {
  const [products] = useProducts();
  const featProducts = products.filter(
    (product) => product.type === "featured"
  );
  const newProducts = products.filter((product) => product.type === "new");
  const menProducts = products.filter((product) => product.type === "men");
  const womenProducts = products.filter((product) => product.type === "women");
  const kidsProducts = products.filter((product) => product.type === "kids");
  console.log(
    featProducts,
    menProducts,
    womenProducts,
    kidsProducts,
    newProducts
  );
  console.log(products);
  return (
    <>
      <Banner />
      <Services />
      <About />
      <div className="mt-40 md:mt-0">
        <ProductSection
          products={featProducts}
          heading="Our Featured Products"
        />
      </div>
      <ProductSection products={newProducts} heading="New Arrivals" />
      <GetApp />
      <ProductSection products={menProducts} heading="Mens Collection" />
      <ProductSection products={womenProducts} heading="Women Collection" />
      <ProductSection products={kidsProducts} heading="Kids Clothing" />
      <Review />
    </>
  );
};

export default Homepage;
