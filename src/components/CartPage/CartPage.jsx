import useCart from "../../Hooks/useCart";

const CartPage = () => {
  const [cart] = useCart();
  console.log(cart);
  return <div></div>;
};

export default CartPage;
