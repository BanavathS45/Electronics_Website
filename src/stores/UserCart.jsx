import React, { useState, useEffect } from "react";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Products from "./components/Products";

const UserCart = () => {
  let totalPrice = 0;
  const { cartItems, removeFromCart, handleChange } = useCart();
  console.log(cartItems);
  const [count, setCount] = useState(1);
  // const handleAdd=( )=>{
  // setCount(count+1);
  // }
  // const handlemin=( )=>{
  // if(count > 1){
  // setCount(count-1);
  // }
  // }

  // console.log(cartItems);
  return (
    <>
      <Navbar />
      <div className="finalCart">
        <h1 className="y-cart text-center">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div className="container w-100">
            {cartItems.map((item) => {
              totalPrice += item.price * count;

            //   useEffect =
            //     (() => {
            //       const locProduct = JSON.parse(
            //         localStorage.getItem(cartItems)
            //       );
            //       console.log(locProduct);
            //     },
            //     [cartItems]);

              return (
                // <div className="col-12 ">
                <div className=" container cart-section  d-flex justify-content-around align-items-center w-100  ">
                  <div className="row w-100">
                    <div className="col-3 cart-img  ">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-3 cart-details">
                      <h3>{item.product}</h3>
                      <h3>{item.model}</h3>
                    </div>
                    <div className=" col-2 add d-flex  align-items-center justify-content-center">
                      <button
                        className="btn"
                        onClick={() => handleChange(item, -1)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p className=" mt-3">{count}</p>
                      <button
                        className="btn "
                        onClick={() => handleChange(item, +1)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="col-2 price d-flex justify-content-center align-items-center">
                      <h2>&#8377; {Math.floor(item.price * count)}</h2>
                    </div>
                    <div className="col-2 removed d-flex  align-items-center justify-content-end ">
                      <button
                        className="removeBtn btn btn-warning"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                      <button
                        className="removeBtnX btn btn-warning"
                        onClick={() => removeFromCart(item)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>

                //</div>
              );
            })}
            <div className="total-price col-4 d-flex justify-content-end  mt-5 w-100">
              <div className="t-price pb-3">
                <>
                  <h1 className="ProductBill">Product Bill</h1>
                  <h4>
                    Sub Price:{" "}
                    <span>
                      {" "}
                      <b>&#8377;</b> &nbsp;{Math.floor(totalPrice)}
                    </span>{" "}
                  </h4>
                  <h4>
                    Shiping Cost:{" "}
                    <span>{cartItems.length <= 2 ? 40 : "Free"}</span>{" "}
                  </h4>
                  <h2>
                    Total Price :{" "}
                    <span>
                      <b>&#8377;</b> &nbsp;
                      {Math.floor(
                        cartItems.length <= 2 ? totalPrice + 40 : totalPrice
                      )}
                    </span>
                  </h2>
                  <Link
                    to="/check"
                    className="btn btn-success w-100 Checkout"
                    onClick={() => {
                      alert("You'r Order Successfully Placed");
                    }}
                  >
                    Checkout
                  </Link>
                </>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
