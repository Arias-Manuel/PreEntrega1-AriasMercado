import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./styles/CartWidget.css";

const CartWidget = () => {
  return (
    <section className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      <div className="qty-display">2</div>
    </section>
  );
};

export default CartWidget;
