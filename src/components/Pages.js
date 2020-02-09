import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = ({ onclick, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example" className="pagination">
      {pageNumbers.map((number) => (
        <PaginationItem className={currentPage === number ? 'active_page' : ''} key={number}>
          <PaginationLink
            first
            href="#"
            id={number}
            onClick={() => onclick(number)}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default Pages;
