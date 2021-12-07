import React, { useEffect } from 'react';


const ProductsByYear = ({ productsOfAYear, onProductClick }) => {
   useEffect(() => {

      document.querySelector('.one-in-three-box').style.display="block";
      document.querySelector('.product-container').style.display="none";
      document.querySelector('.modelsOfBrand').style.display="none";
      document.querySelector('.itemsOfModel1').style.display="none";
      document.querySelector('.car-brand-block').style.display="none";
      document.querySelector('.productsEachYear').style.display="flex";

   }, [productsOfAYear]);


   const renderProductsOfYear = productsOfAYear.map(x => {
      return (
         <div className="product" key={x.serial} onClick={() => onProductClick(x)}>
            <div className="productImg-container"><img src={x.img} alt="Product" /></div>
               
            <div className="serial-product">
               <p>{x.serial}</p>
               <h4>{x.product}</h4>
            </div>
         </div>
      )
   });


   return (
      <React.Fragment>
         {renderProductsOfYear}
      </React.Fragment>
   )
}

export default ProductsByYear;