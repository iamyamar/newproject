import React from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";

const ProductsArea = () => {
  return (
    <div className="container">
      <ProductToolBar />
      <div className="row">
        {productPageProductData.slice(0, 15).map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsArea;
