import React from 'react';

const ProductDetails = ( {productData} ) => {

   return (
      <React.Fragment>
         {
            productData.length === 0 ? [] :
            <React.Fragment>
            <div className="product-details-box">
               <div className="product-serial-box">
                  <h3>{productData.product}</h3>
                  <p>{productData.serial}</p>
               </div>

               <div className="value-box">
                  <div className="box1">
                     <h3>Weight</h3>
                     <p>{productData.data.weight}</p>
                  </div>

                  <div className="box2">
                     <h3>Price</h3>
                     <p>${productData.data.price}</p>
                  </div>
               </div>
               <hr />
               <div className="product-description">
                  {productData.data.description}
               </div>
            </div>

            <div className="product-img-box">
               <img src={productData.img} alt="Product" />
            </div>
            </React.Fragment>
         }
      </React.Fragment>
   )
}

export default ProductDetails;