import React from "react";

import { Categories } from "../components/Categories";
import { SortPopup } from "../components/SortPopup";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortBy, setSortBy] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState(0);

  React.useEffect(() => {
    fetch("https://647672239233e82dd53a05fc.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories sortBy={sortBy} setSortBy={setSortBy} />
        <SortPopup
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </>
  );
};
