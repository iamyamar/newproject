import React,{useState} from "react";
import style from "./ProductToolBar.module.css";
import { IoListOutline, IoApps, IoContractOutline } from "react-icons/io5";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import { useEffect } from "react";

const ProductToolBar = (props) => {

  const handleChanges = (e) => {
    let value = e.target.value;
    console.log(value)
    if(value == "price-ascending")
    {
      props.setSortbyprice(0)
    }
    else if(value == "price-descending")
    {
      props.setSortbyprice(1)  
    }
    else if(value == "title-descending")
    {
        props.setSortbyname(1)
    }
    else if(value == "title-ascending")
    {
        props.setSortbyname(0)
    }
    else if(value == "Reset Filters")
    {
      props.setSortbyname(99)
      props.setSortbyprice(99)
    }
}


const handleChangesExtra = (e) => {
  let value = e.target.value;
  console.log(value)
  if(value == "All Discounted products")
  {
    props.setDiscount(1);
  }
  else if(value == "Additional Filters - Reset")
  {
    props.setDiscount(99);
    props.setDis20(99);
    props.setDis50(99);
    props.setDis50plus(99);
  }
  else if(value == "twenty")
  {
    props.setDiscount(1);
    props.setDis20(1);
    props.setDis50(99);
    props.setDis50plus(99);
    console.log("setDis20 set to 1")
  }
  else if(value == "fifty")
  {
    props.setDiscount(1);
    props.setDis20(99);
    props.setDis50(1);
    props.setDis50plus(99);
    console.log("setDis50 set to 1")
  }
  else if(value == "fiftyplus")
  {

    props.setDiscount(1);
    props.setDis20(99);
    props.setDis50(99);
    props.setDis50plus(1);
    console.log("setDis50plus set to 1")
  }
}

let page = props.page

const [ start,setStart] = useState(1)
const [ end,setEnd] = useState(6)


useEffect(() => {
  if( page == 1)
  {
    setStart(1)
    setEnd(6)
  }
  else if( page == 2)
  {
    setStart(7)
    setEnd(12)
  }
  else if( page == 3)
  {
    setStart(13)
    setEnd(18)
  }
  console.log(page)
}, [page])

  return (
    <div>
      <div>
        <div className={style.toolbar}>
          <div className={style.left_side}>
            <button className={style.list_button}>
              <IoListOutline />
            </button>
            <button className={`${style.ioapps_button} me-lg-4`}>
              <IoApps />
            </button>
            <p className={style.show_item_count}>Showing {start} to {end} of 18 items</p>
          </div>
          <div className={style.right_side}>
            <div className={style.show_item_wrapper}>
             
              {/* Search Bar */}
              <div
                className={`${style.serach_wrapepr} d-flex align-items-center`}
              >
                <input
                  type="text"
                  value={props.searchtext}
                  onChange={(e) => props.setSearchText(e.target.value)}
                  className={`${style.search_box} ${props.showSearchBox ? "d-blcok" : "d-none"
                    }`}
                />
                {props.showSearchBox ? (
                  <MdClose style={{width:"100px",height:"25px"}} onClick={() => props.setShowSearchBox(false)} />
                 
                ) : (
                  <MdSearch style={{width:"100px",height:"25px"}} onClick={() => props.setShowSearchBox(true)} />
                )}
              </div>

            </div>
            <div className={style.short_by_wrapper}>
              <label className={style.short_by_label} htmlFor="short_by">
                Sort by:
              </label>
              <select id="short_by" className={style.short_by} name="short_by" onChange={handleChanges}>
                <option value="Reset Filters">Reset Filter</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
              </select>
              <select id="short_by" className={style.short_by} onChange={handleChangesExtra}>
                  <option>Additional Filters - Reset</option>
                  <option>All Discounted products</option>
                  <option value="twenty">00%  {'<'} Discount {'<'} 20%</option>
                  <option value="fifty">20% {'<'} Discount {'<'} 50%</option>
                  <option value="fiftyplus">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discount&nbsp;{'>'}&nbsp;50%</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductToolBar;

