
import React from "react";
import style from "./Pagination.module.css";
import { useEffect } from "react";
import { useState } from "react";



const Pagination = (props) => {

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
    <div className="container">
      <div className={style.pagination}>
      <p className={style.show_item_count}>Showing {start} to {end} of 18 items</p>
        <div className={style.page_wrapper}>
          <button onClick = {()=>{
            props.setPage(1);
            document.getElementById('btn1').className = style.active;
            document.getElementById('btn2').classList.remove(style.active);
            document.getElementById('btn3').classList.remove(style.active);
          }} id='btn1' className={style.active}>1</button>
          <button onClick = {()=>{
            props.setPage(2);
            document.getElementById('btn2').className = style.active;
            document.getElementById('btn1').classList.remove(style.active);
            document.getElementById('btn3').classList.remove(style.active);
          }} id='btn2'>2</button>
          <button onClick = {()=>{
            props.setPage(3);
            document.getElementById('btn3').className = style.active;
            document.getElementById('btn1').classList.remove(style.active);
            document.getElementById('btn2').classList.remove(style.active);
          }} id='btn3'>3</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;