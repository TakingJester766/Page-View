import { useState } from 'react';

const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 500;
  const pageCount = Math.ceil(text.length / charactersPerPage);

  const handleScroll = (event) => {
    setCurrentPage(Math.floor(event.target.scrollTop / event.target.scrollHeight));
  };

  return (
    <div>
      <div className="scroll-container" style={{overflow: 'auto', height: '500px'}} onScroll={handleScroll}>
        {Array.from({ length: pageCount }, (_, i) => {
          let start = i * charactersPerPage;
          let end = (i + 1) * charactersPerPage;
          let currentText = text.slice(start, end);
          if (currentText[currentText.length - 1] !== " ") {
            let lastSpace = currentText.lastIndexOf(" ");
            currentText = currentText.slice(0, lastSpace);
          }
          return (
            <div className={`page ${i === currentPage ? 'visible' : 'hidden'}`} key={i}>
              <div className="text-container">
                {currentText}
                {i !== pageCount - 1 && <div className="page-break"></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default ScrollableText;
