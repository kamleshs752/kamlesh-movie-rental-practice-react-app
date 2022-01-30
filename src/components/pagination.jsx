import React from "react";
import lodash from "lodash";

function Pagination(props) {
  const { itemsCount, pageSize ,currentPage,onPageChange} = props;
  const pagesCount = itemsCount / pageSize;
  const pages = lodash.range(1, pagesCount + 1);
  if(pagesCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
            <a className="page-link" onClick={()=>onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
