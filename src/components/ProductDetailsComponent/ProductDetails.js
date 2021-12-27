import React, { useState } from "react";
import style from "./ProductDetails.module.css";
import { singleProductDetailsData } from "./../Data/SingleProductDetailsData";
import TextDescription from "./TextDescription";

const detailsMenuList = [
  "Description",
  "Reviews",
  "Additional Information",
  "Tags",
];

const ProductDetails = () => {
  const [selected, setSelected] = useState("Description");
  console.log(selected)
  return (
    <div className="container mt-5 pb-5">
      <div className="d-md-flex mb-4">
        {detailsMenuList.map((menu, index) => (
          <div key={index}>
            
            <p
              onClick={() => setSelected(menu)}
              className={`${style.menu} me-5 cursor-ponter ${
                selected === menu ? style.active : ""
              }`}    
            >
              {menu}
            </p>
            
          </div>
        ))}
      </div>
      <div>
        {
          selected == "Description" ?
          (
            <div className={`d-none d-md-block`}>
             <TextDescription discription={singleProductDetailsData} />
             </div>
          ) :
          selected == "Reviews" ?
          (
            <div className={`d-none d-md-block`} style={{fontSize: 14,fontFamily : "sans-serif"}}>
            <p><b>WEBSITE REVIEWS :</b></p>
             <p>
             <b><i>RATING :</i>&nbsp;5 </b><br />
             Type : Heavy user <br />
             Love this!  Well made, sturdy, and very comfortable.  I love it!Very pretty
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;1 </b><br />
             Type : Light User <br />
             Missing information on how to use it, but it is a great product for the price! 
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;3 </b><br />
             Type : Average User <br />
             These are okay they are not as nice as the ones I got from my local store but they are
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;4 </b><br />
             Type : Heavy User <br />
             Product is fine, wish it had an option to have a separate handle.
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;5 </b><br />
             Type : Light User <br />
             As advertised.  Easy to use.  Love the colors.  Also, the dimensions are just
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;5 </b><br />
             Type : Light User <br />
             Awesome is all I have to say, the materials are good, and the quality is decent.
             <hr />
             </p>
             <p>
             <b><i>RATING :</i>&nbsp;1 </b><br />
             Type : Average User <br />
             Awful experience, everything stuck, not cooled evenly. The only problem is that it's not really a good product!!
             <hr />
             </p>
            </div>
          ) :
          selected == "Additional Information" ?
          (
            <div className={`d-none d-md-block`}>
            <p><b>ADDITIONAL INFORMATION :</b></p>
             <p>
             The automotive industry relies on printed warnings to provide drivers, passengers and technicians imperative operational information, hazard information and safety protocols. Effective communication can save lives and reduce liability issues. A labeling error can be just as bad as a faulty part, potentially resulting in significant injury or worse. Precise, quality warnings are key to avoiding hazardous situations and ensuring the safety of passengers and workers.<br /><br />

Whether a manufacturer, ride provider, technician or vehicle owner, easily understood and clearly visible warnings and instructions in a vehicle and within your manufacturing facility promote safety. While some labels, signs and tags are federally required, in some cases, customization is necessary. Our expert staff can help you develop the right warnings and instructions for the situation. As more and more automotive vehicles are made of different materials, and may have different environmental and cleaning requirements, we offer durable solutions built to last. We use the highest quality adhesives that can withstand extreme temperatures and adhere to various surface types including textured, powder-coated and low or high energy. They are also durable, which provides peace of mind that the warning will last the vehicle’s lifetime. Additionally, sometimes space is limited where a safety label, sign or tag is required; we can work with you to create the unique shape and size needed, no matter the dimensions, to ensure clear communication. Clarion Safety can meet all of your label, sign and tag needs – including compliance with OSHA/ANSI, ISO or other regulations and material and size-related challenges.
             </p>
            </div>
          ) :
          selected == "Tags" ?
          (
            <div className={`d-none d-md-block`}>
            <b><p>TAGS:</p></b>
           <b>
            <p style={{width : 150,backgroundColor : "lightblue",marginLeft : "10px",border : "2px solid white"}}>Repair Kit<br /></p><br /><br />
            <p style={{width : 150,backgroundColor : "lightblue",marginLeft : "10px",border : "2px solid white"}}>Inflator<br /></p><br /><br />
            <p style={{width : 150,backgroundColor : "lightblue",marginLeft : "10px",border : "2px solid white"}}>Gauge<br /></p><br /><br />
            <p style={{width : 150,backgroundColor : "lightblue",marginLeft : "10px",border : "2px solid white"}}>Navigator<br /></p><br /><br />
            <p style={{width : 150,backgroundColor : "lightblue",marginLeft : "10px",border : "2px solid white"}}>Tool Kit<br /></p>
            </b>
           </div>
          ) :
          (
            <div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProductDetails;
