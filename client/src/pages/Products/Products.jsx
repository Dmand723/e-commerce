import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const maxPrice = 1000;
  const catTitle = useParams().title;
  const [curPrice, setCurPrice] = useState(maxPrice);
  const [sort, setSort] = useState("asc");
  const [isChanging, setIsChanging] = useState(false);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [filters, setFilters] = useState({
    curPrice: curPrice,
    sort: sort,
    selectedSubCats: selectedSubCats,
  });

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters[categories][title][$eq]=${catTitle}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  const handleRangeChange = (e) => {
    setCurPrice(e.target.value);
    setIsChanging(true);
  };
  const setCurFilters = () => {
    setFilters({
      curPrice: curPrice,
      sort: sort,
      selectedSubCats: selectedSubCats,
    });
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.title}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem price">
          <h2>Filter By Price</h2>
          {isChanging ? <span className="filterPrice">{curPrice}</span> : ""}
          <div className="inputItem range">
            <span>0</span>
            <input
              onMouseUp={() => setTimeout(() => setIsChanging(false), 1000)}
              type="range"
              min={0}
              max={1000}
              onChange={(e) => handleRangeChange(e)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
        <button className="btn" onClick={setCurFilters}>
          Set Filters
        </button>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catTitle={catTitle}
          filters={filters}
          // maxPrice={curPrice}
          // sort={sort}
          // subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
