import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();
  const { name, brand, image, price, rating, details, type } = product;
  return (
    <div className="flex mt-10 justify-between items-center">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-2xl text-black">
        <p>
          <span className="font-bold">Product Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Category:</span> {type}
        </p>
        <p>
          <span className="font-bold">Brand: </span>
          {brand}
        </p>
        <p>
          <span className="font-bold">Details:</span> {details}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <div className="flex gap-5 mt-6">
          <button className="btn btn-sm border-2 border-black">
            ADD PRODUCT
          </button>
          <button className="btn btn-sm border-2 border-black">
            EDIT PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
