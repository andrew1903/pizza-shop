import React from "react";

import styles from "./Search.module.scss";

import { SearchContext } from "../app/App";

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const onChangeSearchValue = (value) => {
    setSearchValue(value);
  };

  const onClickClear = () => {
    setSearchValue("");
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g id="Icon-Search" transform="translate(30.000000, 230.000000)">
            <path
              className="st0"
              d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z"
              id="Fill-1"
            />
            <polyline
              className="st0"
              id="Fill-2"
              points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    "
            />
          </g>
        </g>
      </svg>
      <input
        className={styles.input}
        placeholder="Searching for pizza..."
        value={searchValue}
        onChange={(e) => onChangeSearchValue(e.target.value)}
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
