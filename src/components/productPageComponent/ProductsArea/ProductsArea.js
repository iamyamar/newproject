import React,{useState} from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";

const ProductsArea = (props) => {

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchtext, setSearchText] = useState("");


  return (
    <div className="container">
      <ProductToolBar searchtext={searchtext} setSearchText={setSearchText} showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} />
      <div className="row">
        {productPageProductData.filter((element)=>{
          return (element.pageNo === props.page && element.productTitle.toLowerCase().includes(searchtext.toLowerCase()))
        }).sort().map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsArea;
