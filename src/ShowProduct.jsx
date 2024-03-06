import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countProduct, getProd } from "./Actions/productAction"; 
import { useParams } from "react-router-dom";

const ShowProduct = () => {
  let prod = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleShow = () => {
    dispatch(getProd(id));
  };

  useEffect(() => {
    handleShow();
  }, []);
  const handleIncrement = () => {
    dispatch(countProduct());
  };

  return (
    <div className="conatiner">
      <h1 className="text-center">Product Details</h1>
      <div className="row justify-content-center">
        <div className="card" style={{ width: "18rem", margin: "5px" }}>
          <img
            src={prod.thumbnail}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">{prod.description}</p>
            <p className="card-text">Price: {prod.price}$</p>
            <button onClick={handleIncrement} className="btn btn-dark">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
