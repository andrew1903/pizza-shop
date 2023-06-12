import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export const Pagination = ({ onClick }) => {
  const onPageChange = ({ selected }) => {
    onClick(selected + 1);
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={onPageChange}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};
