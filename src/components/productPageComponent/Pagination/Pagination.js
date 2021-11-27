import React from "react";
import style from "./Pagination.module.css";


const Pagination = (props) => {
  return (
    <div className="container">
      <div className={style.pagination}>
        <p>Showing 1 to 9 of 37 items</p>
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
