import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, countProduct } from "./Actions/productAction";
import { Link } from "react-router-dom";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="conatiner">
        <div className="row">
          {this.props.products.map((product) => (
            <div
              className="col-12 col-md-4 card"
              style={{ width: "18rem", margin: "5px" }}
              key={product.id}
            >
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt="..."
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price}$</p>
                <button
                  className="btn btn-dark btn-block"
                  onClick={this.props.countProduct}
                >
                  Add To Cart
                </button>
                <Link to={`${product.id}`} className="btn btn-dark my-2">
                  Show Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { getProducts, countProduct })(
  Products
);
