import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../redux/actions/productQuantity";

import ao1 from "../Assets/Image/ao1.jpg";
import ao3 from "../Assets/Image/ao3.jpg";
import ao10 from "../Assets/Image/ao10.jpg";
import ao11 from "../Assets/Image/ao11.jpg";

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function(item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  // const productImages = [ao1, ao3, ao10, ao11];
  const productImages = product => {
    if (product.tagName === "blueTshirt") {
      return ao1;
    } else if (product.tagName === "greenTshirt") {
      return ao10;
    } else if (product.tagName === "ashsTshirt") {
      return ao11;
    } else if (product.tagName === "cosnTshirt") {
      return ao3;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    console.log("My product is: ");
    console.log(product);

    return (
      <Fragment key={index}>
        <div className="product">
          <i onClick={() => clearProduct(product.tagName)} 
          className="fa fa-times-circle"></i>
          <img src={productImages(product)} alt="image"></img>
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <i
            onClick={() => productQuantity("decrease", product.tagName)}
            className="fa fa-minus decrease"
          ></i>
          <span>{product.numbers}</span>
          <i
            onClick={() => productQuantity("increase", product.tagName)}
            className="fa fa-plus increase"
          ></i>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">Product</h5>
        <h5 className="price sm-hide">Price</h5>
        <h5 className="quantity">Quantity</h5>
        <h5 className="total">Total</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">{basketProps.cartCost},00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
});
export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);
