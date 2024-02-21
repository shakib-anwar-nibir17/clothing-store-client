import PropTypes from "prop-types";
const CardCard = ({ product }) => {
  const { name, image } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-10">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

CardCard.propTypes = {
  product: PropTypes.object,
};

export default CardCard;
