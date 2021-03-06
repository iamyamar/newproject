import React from 'react';
import style from "./Slider.module.css"
import {Form} from "react-bootstrap"
import {data } from '../../../pages/Carproducts/carproductsdata' 
import  { Link } from "react-router-dom"

import { MdKeyboardArrowRight } from "react-icons/md";

const SliderDropDown = () => {  
      
    return (
        <div>
            <div className={style.exhaust}>
            <div>
              <p className={"text-uppercase text-white me-4 mb-3 mb-md-0"}>
                find your exhaust:
              </p>
            </div>
            <div className={style.select}>
              <Form.Select className={"text-uppercase"}>
                <option>BRAND</option>
                <option>Default select</option>
              </Form.Select>
              <Form.Select className={"text-uppercase"}>
                <option>Model</option>
                {

                  data.map(y => {
                    return(
        
                    <React.Fragment>
                    {data.map((item, i) => (
                      <li key={i}>
                        <option>{item.id}</option>
                      </li>
                      ))}
                    </React.Fragment>
                    )
                  })
                  }
              </Form.Select>
              <Form.Select className={"text-uppercase"}>
                <option>Year</option>
                <option>2021</option>
              </Form.Select>
            </div>
            <div>
            <Link
            to="/carproducts" >
            <MdKeyboardArrowRight

                className={`${style.arrow} text-white mt-3 mt-md-0`}
                />
                </Link>
            </div>
          </div>
        </div>
    );
};

export default SliderDropDown;