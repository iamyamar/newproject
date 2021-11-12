import React from "react";
import style from "./ProductToolBar.module.css";
import { IoListOutline, IoApps } from "react-icons/io5";

const ProductToolBar = () => {
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
            <p className={style.show_item_count}>Showing 1 to 9 of 37 items</p>
          </div>
          <div className={style.right_side}>
            <div className={style.show_item_wrapper}>
              <label className={style.show_item_label} htmlFor="show_item">
                Show:
              </label>
              <select
                id="show_item"
                className={style.show_item}
                name="show_item"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className={style.short_by_wrapper}>
              <label className={style.short_by_label} htmlFor="short_by">
                Sort by:
              </label>
              <select id="short_by" className={style.short_by} name="short_by">
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductToolBar;
