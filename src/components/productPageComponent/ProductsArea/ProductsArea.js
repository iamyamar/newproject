
import React,{useState} from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";
import { set } from "react-hook-form";
import NotFound from "../../../images/not-found.png"

const ProductsArea = (props) => {

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchtext, setSearchText] = useState(""); 
  const [sortbyprice,setSortbyprice] = useState(99);
  const [sortbyname,setSortbyname] = useState(99);
  const [discount,setDiscount] = useState(99);
  const [dis20,setDis20] = useState(99);
  const [dis50,setDis50] = useState(99);
  const [dis50plus,setDis50plus] = useState(99);



  return (
    <div className="container">
    <ProductToolBar searchtext={searchtext} setSearchText={setSearchText} 
    showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} 
    sortbyprice={sortbyprice} setSortbyprice={setSortbyprice}
    sortbyname={sortbyname} setSortbyname={setSortbyname}
    discount={discount} setDiscount={setDiscount}
    page={props.page} setPage={props.setPage}
    dis20={dis20} setDis20={setDis20}
    dis50={dis50} setDis50={setDis50}
    dis50plus={dis50plus} setDis50plus={setDis50plus}
    />
      <div className="row">
        {productPageProductData.filter(
          (discount == 99) && (dis20 == 99) && (dis50 == 99) && (dis50plus == 99) ?
          (element)=>{
          return (
            (element.pageNo === props.page && element.productTitle.toLowerCase().includes(searchtext.toLowerCase())) != null ?
            (element.pageNo === props.page && element.productTitle.toLowerCase().includes(searchtext.toLowerCase())) :
            (
              <div>
               <img src={NotFound} alt="not found" className="resimage" />
               <h1 style={{ fontWeight: "900", padding: "20px 0" }}>
                  OPPS!NO PRODUCTS FOUND
               </h1>     
              </div>
            )
            )
        }
        :
        (discount == 1) && (dis20 == 1) && (dis50 == 99) && (dis50plus == 99) ?
        (element)=>{
          return (
            (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '' &&
            element.discount < 20) != null ?
            (element.pageNo === props.page && 
              element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
              element.newPrice != '' &&
              element.discount < 20) :
              console.log("Nothing found in this range")
            )
        }
        :
        (discount == 1) && (dis20 == 99) && (dis50 == 1) && (dis50plus == 99) ?
        (element)=>{
          return (
            (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '' && 
            (20 < element.discount < 50)) != null ?
            (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '' && 
            (20 < element.discount < 50)) :
            (
              <div>
               <img src={NotFound} alt="not found" className="resimage" />
               <h1 style={{ fontWeight: "900", padding: "20px 0" }}>
                 OPPS!NO PRODUCTS FOUND
               </h1>     
              </div>
            ) 
          )
        }
        :
        (discount == 1) && (dis20 == 99) && (dis50 == 99) && (dis50plus == 1) ?
        (element)=>{
          return (
            (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '' && 
            element.discount > 50) !== null ?
            (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '' && 
            element.discount > 50) :
            console.log("no")
            )
        }
        :
        (element)=>{
          return (element.pageNo === props.page && 
            element.productTitle.toLowerCase().includes(searchtext.toLowerCase()) &&  
            element.newPrice != '')
        }
        ).sort(
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
