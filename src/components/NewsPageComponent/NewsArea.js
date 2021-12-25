import React from "react";
import { newsData } from "./../Data/newsData";
import SingleNews from "./SingleNews";
import style from "./NewsPageComponent.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const NewsArea = (props) => {

  let page = props.page

  return (
    <>
      <div>
        {newsData.filter(
          (element)=>{
            return(
              element.pageno === page
            )
          }
          ).map((news, index) => (
          <SingleNews news={news} key={index} />
        ))}
      </div>
      <div>
        <div className={style.pagination}>
          <p>Showing 1 to 2 of 4 items</p>
          <div className={style.page_wrapper}>
            <p><button id='btn1' className={style.active} onClick={()=>{
              props.setPage(1)
              document.getElementById('btn1').className = style.active;
              document.getElementById('btn2').classList.remove(style.active);
            }}>1</button></p>
           <p><button id='btn2' onClick={()=>{
             props.setPage(2)
             document.getElementById('btn2').className = style.active;
             document.getElementById('btn1').classList.remove(style.active);
            }}>2</button></p>
            <p>
              <MdKeyboardArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArea;
