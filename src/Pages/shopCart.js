import React from "react";
import { house } from "../components/Home/images";
import Star from "../components/Rating/Rating";
import "./shopCart.css";
import del from "./img/delete.png";
import update from "./img/update.png";

const Cart = () => {
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Vegetables & Tubers</a>
          <span>Seed Of Change Organic</span>
        </nav>
      </header>
      <main>
        <div className="headings">
          <h1>Your Cart</h1>
          <div className="heading-body">
            <h6 className="text-body">
              There are <span className="text-brand">3</span> products in your
              cart
            </h6>
            <h6 className="text-body">
              <a href="/">
                <img src={del} alt="icon" height={"16px"} /> Clear Cart
              </a>
            </h6>
          </div>
        </div>
        <div className="content-body">
          <div className="left-content">
            <div className="table-body">
              <table className="table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custom-checkbox">
                      <input
                        className=""
                        type="checkbox"
                        name="checkbox"
                        id=""
                        value=""
                      />
                    </th>
                    <th scope="col" colSpan={2}>
                      Product
                    </th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Field Roast Chao Cheese Creamy Original
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$2.51 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$2.51 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Blue Diamond Almonds Lightly Salted
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$3.2 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$3.2 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="custom-checkbox">
                      <input type="checkbox" name="checkbox" />
                    </td>
                    <td className="product-img">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                        alt="/"
                      />
                    </td>
                    <td className="product-des product-name">
                      <h6>
                        <a
                          className="product-name-heading"
                          href="shop-product-right.html"
                        >
                          Fresh Organic Mustard Leaves Bell Pepper
                        </a>
                        <Star />
                      </h6>
                    </td>
                    <td className="price" data-title="Unit Price">
                      <h4 className="text-body">$2.43 </h4>
                    </td>
                    <td className="detail-info" data-title="Stock">
                      <input type="number" defaultValue={1} min={1} />
                    </td>
                    <td className="price" data-title="Price">
                      <h4 className="text-brand">$2.43 </h4>
                    </td>
                    <td className="action" data-title="Remove">
                      <a href="/" className="text-body">
                        <img src={del} alt="icon" height={"24px"} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="nav-buttons">
              <a className="back btn" href="/">
                Continue Shopping
              </a>
              <a className="update btn" href="/">
                <img src={update} alt="icon" />
                Update Cart
              </a>
            </div>
            <div className="shipping-coupen">
              <div className="shipping">
                <h4>Calculate Shipping</h4>
                <p>
                  Flat rate:<span>5%</span>
                </p>
                <div className="state-zip">
                  <input
                    type="text"
                    required={true}
                    name="name"
                    placeholder="State / Country"
                  />
                  <input
                    type="text"
                    placeholder="PostCode / ZIP"
                    name="zip"
                    required={true}
                  />
                </div>
              </div>
              <div className="coupen">
                <h4>Apply Coupon</h4>
                <p>Using A Promo Code?</p>
                <div className="form">
                  <input
                    type="text"
                    required={true}
                    placeholder="Enter your coupon"
                    name="coupon"
                  />
                  <button type="submit">Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="total-price">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>Subtotal</h6>
                    </td>
                    <td className="text-end">
                      <h4>$12.31</h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Shipping</h6>
                    </td>
                    <td>
                      <h5 className="text-end">Free</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Estimate for</h6>
                    </td>
                    <td>
                      <h5 className="text-end">United Kingdom</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Total</h6>
                    </td>
                    <td>
                      <h4 className="text-end">$12.31</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="/" className="btn">
                Proceed To CheckOut
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
