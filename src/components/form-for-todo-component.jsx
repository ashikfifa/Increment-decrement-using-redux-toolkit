import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice/productSlice";

const FormforTodo = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProduct({
        productName,
        price,
        id: Date.now(),
      })
    );
    setProductName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <br />
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="1"
          min="0"
          required
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormforTodo;
