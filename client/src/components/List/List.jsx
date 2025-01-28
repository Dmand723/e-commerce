import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ filters, catTitle }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${catTitle}${filters.selectedSubCats.map(
      (item) => `&[filters][sub_categories][title][$eq]=${item}`
    )}&[filters][price][$lte]=${filters.curPrice}&sort=price:${filters.sort}`
  );
  return (
    <div className="list">
      {loading
        ? "loading"
        : error
        ? "Somthing Went Wrong"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
