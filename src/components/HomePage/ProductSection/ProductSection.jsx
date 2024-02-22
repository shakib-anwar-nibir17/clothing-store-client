import PropTypes from "prop-types";
import ProductCard from "../../Shared/ProductCard";

const ProductSection = ({ products, heading }) => {
  return (
    <section>
      <h1 className="text-4xl text-black font-extrabold text-center mb-10 md:mt-10  hover:text-blue-600">
        {heading}
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

ProductSection.propTypes = {
  products: PropTypes.array,
  heading: PropTypes.string,
};

export default ProductSection;
