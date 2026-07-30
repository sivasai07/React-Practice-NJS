const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>

            <div className="shimmer-content">
              <div className="shimmer-line title"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line small"></div>
              <div className="shimmer-line small"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;