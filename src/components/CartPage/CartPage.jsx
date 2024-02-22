import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import CardCard from "./CardCard";

const CartPage = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  console.log(cart);
  return (
    <div>
      <h1 className="text-4xl text-black font-extrabold text-center mb-10 mt-10 hover:text-blue-600">
        Welcome {user.displayName} to your Cart
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {cart.map((cartItem) => (
          <CardCard product={cartItem} key={cartItem._id}></CardCard>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
