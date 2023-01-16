import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = text.length;
  const currentText = text.slice(currentPage, currentPage + 1);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  }

  return (
    <div>
      <div style={{overflow: 'auto', height: '500px'}}>
        {currentText}
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default ScrollableText;
