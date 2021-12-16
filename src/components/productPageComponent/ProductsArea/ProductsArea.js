import React,{useState} from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";

const ProductsArea = (props) => {

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchtext, setSearchText] = useState(""); 
  const [sortbyprice,setSortbyprice] = useState(99);
  const [sortbyname,setSortbyname] = useState(99);



  return (
    <div className="container">
    <ProductToolBar searchtext={searchtext} setSearchText={setSearchText} 
    showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} 
    sortbyprice={sortbyprice} setSortbyprice={setSortbyprice}
    sortbyname={sortbyname} setSortbyname={setSortbyname}
    />
      <div className="row">
        {productPageProductData.filter((element)=>{
          return (element.pageNo === props.page && element.productTitle.toLowerCase().includes(searchtext.toLowerCase()))
        }).sort(
          (sortbyprice == 0) ? 
          (a, b) => {
          if(a.newPrice != '' && b.newPrice != '')
          {
           
            return a.newPrice - b.newPrice
          }
          else if(a.newPrice == '' && b.newPrice != '')
          {
           
            return a.price - b.newPrice
          }
          else if(a.newPrice != '' && b.newPrice == '')
          {
            
            return a.newPrice - b.price
          }
          else if(a.newPrice == '' && b.newPrice == '')
          {
            return a.price - b.price
          }
         } :
         (sortbyprice == 1) ?
         (b,a) => {
          
          if(a.newPrice != '' && b.newPrice != '')
          {
            
            return a.newPrice - b.newPrice
          }
          else if(a.newPrice == '' && b.newPrice != '')
          {
           
            return a.price - b.newPrice
          }
          else if(a.newPrice != '' && b.newPrice == '')
          {
            
            return a.newPrice - b.price
          }
          else if(a.newPrice == '' && b.newPrice == '')
          {
            
            return a.price - b.price
          }
         }
         :
         (sortbyname == 0) ?
        (a,b) => 
        {
            return a.productTitle.localeCompare(b.productTitle)
        }
         :
         (sortbyname == 1) ?
         (a,b) => 
        {
            return b.productTitle.localeCompare(a.productTitle)      
        }
          :
        (a,b) => 
        {
            return
        }
        ).


        map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsArea;
