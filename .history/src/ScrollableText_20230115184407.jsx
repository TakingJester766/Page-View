const ScrollableText = ({text}) => {
    const [currentPage, setCurrentPage] = useState(0);
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
      return (
        <>
          {currentText}
          {page !== pageCount - 1 && <div className="page-break"></div>}
        </>
      );
    };
  
    const currentText = getTextForPage(currentPage);
  
    const handleScroll = (event) => {
      setCurrentPage(Math.floor(event.target.scrollTop / event.target.clientHeight));
    };

  return (
    <div>
      <div className="scroll-container" style={{overflow: 'auto', height: '500px'}} onScroll={handleScroll}>
        {text}
      </div>
    </div>
  );
}

export default ScrollableText;
