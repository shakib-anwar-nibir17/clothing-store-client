import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { name, price, image, brand, type } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p>Price: {price} $$</p>
        <p>
          <button className="btn btn-sm border-2 border-black">Details</button>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{brand}</div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;