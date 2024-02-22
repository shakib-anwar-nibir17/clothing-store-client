import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ProductDetail = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const product = useLoaderData();
  const { _id, name, brand, image, price, rating, details, type } = product;

  const handleAddProduct = () => {
    const data = {
      image: image,
      name: name,
      user: user?.displayName,
      email: user?.email,
    };
    console.log(data);
    axiosPublic.post("/carts", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been added`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
  return (
    <div className="flex flex-col lg:flex-row mt-10 justify-between items-center px-4">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-2xl text-black mt-8 lg:mt-0">
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
          <button
            onClick={handleAddProduct}
            className="btn btn-sm border-2 border-black"
          >
            ADD PRODUCT
          </button>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm border-2 border-black">
              EDIT PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
