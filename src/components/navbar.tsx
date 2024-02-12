import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";

import { CardCart } from "../components/cardCart";
import { calculateTotal } from "../redux/actions";
import getStripe from "../services/getStripe";

export function Navbar() {
  const [cartMenuVisible, setCartMenuVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleCartMenu = () => {
    setCartMenuVisible(!cartMenuVisible);
  };

  const cartItems = useSelector((state) => state.cartItems);
  const total = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]); 

  const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const stripe = await getStripe();
    const totalCost = total;
    const response: Response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cartItems,
        totalCost: totalCost,
      }),
    })
    if (response.status === 500) return;
    const data = await response.json();
    stripe.redirectToCheckout({
      sessionId: data.id,
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar mb-4">
      <div className="container-fluid justify-content-between align-items-center">
        <div className="bg-danger text-white p-4 me-4">
          <a className="navbar-brand text-white" href="#">
            Burgers
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hot deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                +00 0000 0000
              </a>
            </li>
          </ul>
        </div>
        <div onClick={toggleCartMenu} style={{ cursor: "pointer" }}>
          <ShoppingCart />
        </div>
        {cartMenuVisible && (
          <div
            className="cart position-absolute p-4 rounded"
            style={{ top: "60%", right: 0, zIndex: 100 }}
          >
            {cartItems.map((item) => (
              <CardCart key={item.id} product={item} />
            ))}
            <p className="mt-4">Total: R${total}</p>
            <button 
              onClick={handleCheckout}
              className='bg-danger text-white border-0'>
              Checkout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
