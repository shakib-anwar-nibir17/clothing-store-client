import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdatePage = () => {
  const axiosPublic = useAxiosPublic();
  const product = useLoaderData();
  const { _id, name, brand, image, price, rating, details, type } = product;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const image = form.image.value;
    const details = form.details.value;

    const updatedProduct = {
      image,
      brand,
      rating,
      name,
      details,
      type,
      price,
    };
    console.log(updatedProduct);

    axiosPublic
      .put(`/products/${_id}`, updatedProduct)
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book Data Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };
  return (
    <div className="px-4">
      <div>
        <h1 className="text-4xl text-black font-extrabold text-center mb-10 mt-10 hover:text-blue-600">
          Product Update Form
        </h1>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1  gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              defaultValue={name}
              placeholder="Product name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              name="brand"
              defaultValue={brand}
              placeholder="Brand name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1  gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              name="image"
              defaultValue={image}
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1  gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Rating (1-5)</span>
            </label>
            <input
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Types</span>
            </label>
            <select
              defaultValue={type}
              name="type"
              required
              className="select select-bordered"
            >
              <option value="">Select...</option>
              <option>featured</option>
              <option>new</option>
              <option>men</option>
              <option>women</option>
              <option>kids</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Details</span>
            </label>
            <textarea
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered pt-4 h-[100px]"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
