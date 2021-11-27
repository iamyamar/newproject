import React from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";

const ProductsArea = (props) => {



  return (
    <div className="container">
      <ProductToolBar />
      <div className="row">
        {productPageProductData.filter((element)=>{
          return (element.pageNo === props.page)
        }).map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsArea;
