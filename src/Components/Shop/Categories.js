import React from "react";
import {Link} from "react-router-dom";

const Categories = (props) => {
  return (
    <div className="border-b-[1px] border-b-gray-300">
      <div
        className="details cursor-pointer"
        onClick={() => {
          props.toggleDropdown(props.i);
        }}
      >
        <button className="h-12 text-left w-[90%]">{props.cat}</button>
        <i className="fas fa-angle-down arrow text-gray-400"></i>
      </div>
      <div className="list overflow-hidden transition-all duration-500" style={{height: "0px"}}>
      <ul className="togglebar relative left-1">
       <li> - <Link to="/Shop" className="text-[#777777] hover:underline">{props.a}</Link></li>
        <li>- <Link to="/Shop" className="text-[#777777] hover:underline">{props.b}</Link></li>
        <li>- <Link to="/Shop" className="text-[#777777] hover:underline">{props.c}</Link></li>
        <li>- <Link to="/Shop" className="text-[#777777] hover:underline">{props.d}</Link></li>
        <li>- <Link to="/Shop" className="text-[#777777] hover:underline">{props.e}</Link></li>
        <li>- <Link to="/Shop" className="text-[#777777] hover:underline">{props.f}</Link></li>
      </ul>
      </div>
      
    </div>
  );
};

export default Categories;
