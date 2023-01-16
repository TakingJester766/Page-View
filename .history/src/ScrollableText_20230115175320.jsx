import React, { useState, useEffect } from 'react';

const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const pageCount = text.length;
  const currentText = text.slice(currentPage, currentPage + 1);

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

  return (
    <div>
      <div className="scroll-container" style={{overflow: 'auto', height: '500px'}}>
        {currentText}
      </div>
    </div>
  );
}

export default ScrollableText;
