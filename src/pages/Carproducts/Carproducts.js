import React from 'react';
import { useState, useEffect, useRef } from 'react';
import CarsDetails from './Cardetails';
import {data} from './carproductsdata';
import './carproducts.css';

function Carproducts() {
    const yearList = useRef(null);
  
    const [brand,setBrand] = useState("");
    const [carsByBrand, setCarsByBrand] = useState([]);
    const [carDetails, setCarDetails] = useState([]);
    const [itemsByYear, setItemsByYear] = useState([]);
    const [brandIsClicked, setBrandIsClicked] = useState([]);
  
    useEffect(() => {
      if(brand === '') return;
  
      data.forEach(x => {
        if(x.brand !== brand) return;
  
        document.querySelector('.default-car-brand').style.display="none";
        setCarsByBrand(x.more);
      })
  
    }, [brand]);
  
  
    const brandClicked = (brand) => {
      document.querySelector('.car-brand-block').style.display="flex";
      data.map(x => {
        if(x.brand === brand) {
          setBrandIsClicked(x.more);
        }
      })
      document.querySelector('.default-car-brand').style.display="none";
    }
    
  
  
    const handleChanges = (e) => {
        const value = e.target.value;
        setBrand(value);  
    }
  
    const collectDetailByModel = (e) => {
      carsByBrand.map(x => {
        if(x.car === e.target.value){
          setCarDetails(x.detail);
        }
      })  
    }
  
    const handleItemsByYear = (e) => {
      carDetails.map(x => {
        if(x.year == e.target.value) {
          setItemsByYear(x.item);
        }
      })
    }
  
    const renderBrandsOfCar = data.map(x => {
      return(
        <div key={x.id} className="brand" onClick={() => brandClicked(x.brand)}>{x.brand}</div>
      )
    })
   
    return (
      <div className="container">
        <h2 className="main-heading">Find Your Exhaust:</h2> 
        
        <div className="filtering-container">
          <select onChange={handleChanges}>
            <option>
              Select a Brand
            </option>
            <option>
              ALFA-ROMEO
            </option>
            <option>
              TESLA
            </option>
            <option>
              BMW
            </option>
            <option>
              ROLLS-ROYCE
            </option>
            <option> 
              BENTLEY
            </option>
            <option>
              BUGATTI
            </option>
            <option>
              PORSCHE
            </option>
            <option>
              LEXUS
            </option>
            <option>
              LANDROVER
            </option>
            <option>
              MARUTI
            </option>
          </select>&nbsp;
  
          <select onChange={collectDetailByModel}>
            <option>
              Select a Model
            </option>
            {
  
            carsByBrand.map(y => {
              return(
  
              <React.Fragment>
                <option>{y.car}</option>
              </React.Fragment>
              )
            })
            }
          </select>&nbsp;
  
          <select onChange={e => handleItemsByYear(e)} ref={yearList}>
          <option>Select a Year</option>
        
           {
             carDetails.map(x => {
               return (
                 <option>{x.year}</option>
               )
             })
           }
      
          </select>
  
        </div>
  
    <div className="container2">
       <h3 className="filter-heading">Filter-results</h3>
  
       <div className="filtering-result-container">
        <div className="default-car-brand">
          {renderBrandsOfCar}
        </div>
  
        <CarsDetails 
          carsList={carsByBrand}
          carBrand={brand}
          particularCarDetails={carDetails}
          productsByYear={itemsByYear}
          brandOnClick={brandIsClicked}
         />
       </div>
    </div>
    </div>
  
    
    );
  }
  
  export default Carproducts;