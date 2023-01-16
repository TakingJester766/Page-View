import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const charactersPerPage = 500;
  const pageCount = Math.ceil(text.length / charactersPerPage);

  const getTextForPage = (page) => {
    let start = page * charactersPerPage;
    let end = (page + 1) * charactersPerPage;
    let currentText = text.slice(start, end);
    if (currentText[currentText.length - 1] !== " ") {
      let lastSpace = currentText.lastIndexOf(" ");
      currentText = currentText.slice(0, lastSpace);
    }
    return currentText;
  }
  const currentText = getTextForPage(currentPage);
  
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    container.addEventListener('wheel', handleScroll);
    return () => container.removeEventListener('wheel', handleScroll);
  }, [currentPage]);

  const handleScroll = (event) => {
    if (!isScrolling) {
      setIsScrolling(true);
      if (event.deltaY < 0) {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
      } else {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount - 1));
      }
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  }

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
