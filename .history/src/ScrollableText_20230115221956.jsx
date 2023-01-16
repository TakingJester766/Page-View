import { useEffect, useState } from 'react';

const ScrollableText = ({text}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 500;
  const pageCount = Math.ceil(text.length / charactersPerPage);

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleScroll = () => {
    const container = document.querySelector('.scroll-container');
    const page = Math.floor(container.scrollTop / container.clientHeight);
    setCurrentPage(page);
  };

  return (
    <div className="scroll-container" style={{overflow: 'auto', height: '500px'}}>
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
  );
}

export default ScrollableText;
