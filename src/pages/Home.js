import React from "react";

import { SearchContext } from "../components/app/App";

import { Categories } from "../components/Categories";
import { Pagination } from "../components/Pagination";
import { SortPopup } from "../components/SortPopup";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortOrder, setSortOrder] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [sortById, setSortById] = React.useState({
    name: "rating",
    property: "rating",
  });

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const order = sortOrder === true ? "asc" : "desc";
    const search = searchValue ? `search=${searchValue}` : ``;

    setIsLoading(true);
    fetch(
      `https://647672239233e82dd53a05fc.mockapi.io/items?page=${pageIndex}&limit=4&${category}&sortBy=${sortById.property}&order=${order}&${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortById, sortOrder, searchValue, pageIndex]);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={categoryId}
          setActiveCategory={setCategoryId}
        />
        <SortPopup
          sortBy={sortById}
          setSortBy={setSortById}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock {...item} key={item.id} />)}
      </div>
      <Pagination onClick={setPageIndex} />
    </>
  );
};
