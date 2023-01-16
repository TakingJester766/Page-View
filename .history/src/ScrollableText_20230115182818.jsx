import React, { useState, useEffect } from 'react';

const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 500;
  const pageCount = Math.ceil(text.length / charactersPerPage);
  const currentText = text.slice(currentPage * charactersPerPage, (currentPage + 1) * charactersPerPage);

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (event) => {
    setCurrentPage(Math.floor(event.target.scrollTop / event.target.clientHeight));
  };

  return (
    <div>
      <div className="scroll-container" style={{overflow: 'auto', height: '500px'}}>
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
