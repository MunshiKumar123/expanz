import React, { useState } from "react";
import CustomerDetails from "./components/CustomerDetails"
import Order from "./components/order/Order"
import Payment from "./components/Payment"
function App() {

  // ========================================
  // totalAmount get from the Order Component
  const [data, setData] = useState()
  const totalPrice = (d) => {
    setData(d)
  }
  // ========================================

  return (
    <React.Fragment>
      <div className="container p-2 bg-primary text-white text-center">
        <h1>Shopping Cart</h1>
        <p>Home / Clothing / My Shopping Cart</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CustomerDetails />
            <Payment totalPrice={data} />
          </div>
          <div className="col-md-6">
            <Order totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
