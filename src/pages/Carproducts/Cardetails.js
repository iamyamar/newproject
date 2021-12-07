import React, { useState, useEffect } from 'react';
import ProductsByYear from './Carproductsbyyear';
import ProductDetails from './Carproductdetails';

const CarsDetails = ({ carBrand, carsList, particularCarDetails, productsByYear, brandOnClick }) => {

    const [productsOfBrand, setProductsOfBrand] = useState([]);
    const [productDescription, setProductDescription] = useState([]);
    const [productOnModelClick, setProductOnModelClick] = useState([]);
    
 
    useEffect(() => {
 
       document.querySelector('.one-in-three-box').style.display="block";
       document.querySelector('.product-container').style.display="none";
       document.querySelector('.itemsOfModel1').style.display="none";
       document.querySelector('.itemsOfModel3').style.display="none";
       document.querySelector('.productsEachYear').style.display="none";
       document.querySelector('.car-brand-block').style.display="none";
       document.querySelector('.modelsOfBrand').style.display="flex";   
      
 
    }, [carBrand]);
 
 
    useEffect(() => {
 
       document.querySelector('.one-in-three-box').style.display="block";
       document.querySelector('.product-container').style.display="none";
       document.querySelector('.productsEachYear').style.display="none";
       document.querySelector('.modelsOfBrand').style.display="none";
       document.querySelector('.car-brand-block').style.display="none";
       document.querySelector('.itemsOfModel3').style.display="none";
       document.querySelector('.itemsOfModel1').style.display="flex";
     
    }, [particularCarDetails]);
 
 
    const renderBrandOnClicked = brandOnClick.map(x => {
       return (
          <div className="car" key={x.car} onClick={() => renderProductsOnClick2(x.car)}>
            <img src={x.img} alt="model of the car brand" />
            <h4>{x.car}</h4>
          </div>
        )
    })
 
 
    const renderDetailsOnProductClick = (productData) => {
       setProductDescription(productData);
       
       document.querySelector('.one-in-three-box').style.display="none";
       document.querySelector('.product-container').style.display="flex";
      
      }
 
 
    const productsOfModel1 = particularCarDetails.map((x) => {
       const renderProducts = x.item.map((y) => {
          return(
             <div className="product" key={y.serial} onClick={() => renderDetailsOnProductClick(y)}>
                <div className="productImg-container"><img src={y.img} alt="Product" /></div>
 
                <div className="serial-product">
                   <p>{y.serial}</p>
                   <h4>{y.product}</h4>
                </div>
             </div>
          )
       })
       return renderProducts;
    })
 
 
    const productsOfModel2 = productsOfBrand.map((x) => {
       const renderProducts = x.item.map((y) => {
          return(
             <div className="product" key={y.serial} onClick={() => renderDetailsOnProductClick(y)}>
                <div className="productImg-container"><img src={y.img} alt="Product" /></div>
 
                <div className="serial-product">
                   <p>{y.serial}</p>
                   <h4>{y.product}</h4>
                </div>
             </div>
          )
       })
       return renderProducts;
    })
 
 
    const productsOfModel3 = productOnModelClick.map(x => {
       const renderProducts = x.item.map((y) => {
          return(
             <div className="product" key={y.serial} onClick={() => renderDetailsOnProductClick(y)}>
                <div className="productImg-container"><img src={y.img} alt="Product" /></div>
 
                <div className="serial-product">
                   <p>{y.serial}</p>
                   <h4>{y.product}</h4>
                </div>
             </div>
          )
       })
       return renderProducts;
    })
 
 
 
    const renderProductsOnClick2 = (car) => {
       brandOnClick.map(x => {
          if(x.car === car ) {
            setProductOnModelClick(x.detail);
          }
       })
       document.querySelector('.car-brand-block').style.display="none";
       document.querySelector('.itemsOfModel3').style.display="flex";
    }
 
 
 
    const renderProductsOnClick1 = (car) => {
       console.log(car);
       carsList.map(x => {
          if(x.car === car){
             setProductsOfBrand(x.detail);
          }
       })
 
       document.querySelector('.modelsOfBrand').style.display="none";
       document.querySelector('.itemsOfModel1').style.display="flex";
    }
    
 
    const modelList = carsList.map(x => {
         return (
           <div className="car" key={x.car} onClick={() => renderProductsOnClick1(x.car)}>
             <img src={x.img} alt="model of the car brand" />
             <h4>{x.car}</h4>
           </div>
         )
       
    }) 
 
    
 
    return (
       <React.Fragment id="cardetailsid">
          <div className="one-in-three-box">
             <div className="modelsOfBrand">
                {modelList}
             </div>
                
             <div className="itemsOfModel1">
                {productsOfModel1}
                {productsOfModel2}
             </div>
 
             <div className="itemsOfModel3">
                {productsOfModel3}
             </div>
 
             <div className="car-brand-block">
                {renderBrandOnClicked}
             </div>   
 
             <div className="productsEachYear">
                <ProductsByYear 
                   onProductClick={renderDetailsOnProductClick}
                   productsOfAModel={particularCarDetails}
                   productsOfAYear={productsByYear}
                />
             </div> 
          </div>
 
          <div className="product-container">
             <ProductDetails 
                productData={productDescription}
             />
          </div>
       </React.Fragment>
    )
 }
 
 export default CarsDetails;