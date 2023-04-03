import React, { useState } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleDropdown = (i) => {
    const list = document.getElementsByClassName("list");
    const arrow = document.getElementsByClassName("arrow");
    if (list[i].style.height == "0px") {
      list[i].style.height = "160px";
      arrow[i].classList.remove("fa-angle-down");
      arrow[i].classList.add("fa-angle-up");
    } else {
      list[i].style.height = "0px";
      arrow[i].classList.remove("fa-angle-up");
      arrow[i].classList.add("fa-angle-down");
    }
  };

  return (
    <div
      id="sidebar"
      className="w-[350px] h-auto flex justify-center bg-gray-100"
    >
      <div className="w-80 p-2 relative top-10">
        <div id="HomeLogo">
          <Link to="/" className="fa fa-home mx-1 text-sm"></Link>{" "}
          <Link to="/" className="font-semibold">
            {" "}
            Home &gt;
          </Link>{" "}
          <span className="text-gray-500"> Shop</span>
        </div>
        <div id="categories" className="relative top-16">
          <h1 className="font-semibold text-lg">CATEGORIES</h1>
          <hr className="border-[1.5px] border-orange-700 w-16" />
          <div className="dropdowns mt-3 relative top-4">
            <Categories i={0} cat="Women" toggleDropdown={toggleDropdown} a="Coats" b="Jackets" c="Dresses" d="Shirts" e="T-Shirts" f="Jeans"/>
            <Categories i={1} cat="Men" toggleDropdown={toggleDropdown} a="Coats" b="Jackets" c="Dresses" d="Shirts" e="T-Shirts" f="Jeans" />
            <Categories i={2} cat="Kids" toggleDropdown={toggleDropdown} a="Coats" b="Jackets" c="Dresses" d="Shirts" e="T-Shirts" f="Jeans" />
            <Categories
              i={3}
              cat="Accessories"
              toggleDropdown={toggleDropdown} a="Coats" b="Jackets" c="Dresses" d="Shirts" e="T-Shirts" f="Jeans"
            />
            <Categories i={4} cat="Cosmetic" toggleDropdown={toggleDropdown} a="Coats" b="Jackets" c="Dresses" d="Shirts" e="T-Shirts" f="Jeans" />
          </div>
        </div>
        <div id="price" className="relative top-28">
          <h1 className="font-semibold text-lg">SHOP BY PRICE</h1>
          <hr className="border-[1.5px] border-orange-700 w-16" />
          <form
            action="/backend.js"
            id="range"
            name="range"
            className="relative top-8"
          >
            <div id="selectionBox">
              <select
                name="min"
                id="mini"
                className="shadow-md shadow-gray-400 rounded-md w-16"
              >
                <option defaultValue="Min">Min</option>
                <option value="250"> &#8377;250</option>
                <option value="500">&#8377;500</option>
              </select>
              <span className="mx-3">to</span>
              <select
                name="max"
                id="maxi"
                className="shadow-md shadow-gray-400 rounded-md w-16"
              >
                <option defaultValue="default">Max</option>
                <option value="500">&#8377;500</option>
                <option value="1000">&#8377;1000</option>
                <option value="2000">&#8377;2000</option>
                <option value="3000+">&#8377;3000+</option>
              </select>
              <Link to="/Shop">
                <button className="text-white w-16 rounded-lg bg-orange-500 ml-8 hover:bg-orange-600 shadow-md shadow-orange-700">
                  Filter
                </button>
              </Link>
            </div>
          </form>
          <div id="size" className="relative top-24">
            <h1 className="font-semibold text-lg">SHOP BY SIZE</h1>
            <hr className="border-[1.5px] border-orange-700 w-16" />
            <form action="./backend.js" id="size" name="size" className="my-8">
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xxs" /> XXS
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xs" /> XS{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xs-s" /> XS-S{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="s" /> S{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="m" /> M{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="m-l" /> M-L{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="l" /> L{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xl" /> XL{" "}
              </div>
            </form>
          </div>

          <div id="color" className="relative top-20">
            <h1 className="font-semibold text-lg">SHOP BY COLORS</h1>
            <hr className="border-[1.5px] border-orange-700 w-16" />
            <form action="./backend.js" id="size" name="size" className="my-8">
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xxs" /> Blacks
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xs" /> Whites{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xs-s" /> Reds{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="s" /> Greys{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="m" /> Blues{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="m-l" /> Beige
                Tones{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="l" /> Greens{" "}
              </div>
              <div className="my-2 text-gray-600">
                <input type="checkbox" className="mx-1" name="xl" /> Yellows{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
