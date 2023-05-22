import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { createPortal } from "react-dom";
import Modal from "./modal.jsx";


function App() {
  const [checkoutModal, setCheckoutModal] = useState(false);

  return (
    <>
      <h3><i className="fa-solid fa-basket-shopping fa-xl"></i></h3>
      <ul id="cart-items">
        <li className="cart-item">
          <img src="/img/ring.jpg" alt="" />
          <div className="item-desc">
          <p className="item-title">Idaho Garnet Tri-Prong Set Sterling Silver Ring w/ Hammered Band</p>
          <p className="item-size">Size: 7</p>
          </div>
          <h4 className="item-price">$120.00</h4>
        </li>
        <li className="cart-item">
        <img src="/img/tunnels.jpg" alt="" />
        <div className="item-desc">
          <p className="item-title">Blue Topaz Prong Set Sterling Silver Tunnels w/ Script Engraving</p>
          <p className="item-size">Size: 19mm</p>
          </div>
          <h4 className="item-price">$200.00</h4>
        </li>
      </ul>
    <div id="total"><h4>Total: $320.00</h4></div>
    <button id="checkout-btn" onClick={() => setCheckoutModal(true)}>Checkout</button>
    {checkoutModal && createPortal(
      <Modal setCheckoutModal={setCheckoutModal}/>,
      document.getElementById('root')
    )}
    </>
  )
};


//^ Render App
const root = createRoot(document.getElementById("root"));
root.render(<App />);
