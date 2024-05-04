import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./display-list-product-component.scss";
import { deleteProduct } from "../../features/productSlice/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);

  const handleRemove = (productListId) => {
    dispatch(deleteProduct(productListId));
  };

  console.log("111111111111", productList);
  return (
    <div>
      {productList?.map((productListIndex) => (
        <div className="cardParent" key={productListIndex.id}>
          {productListIndex.productName} <br />
          {productListIndex.price}
          <button onClick={() => handleRemove(productListIndex.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
