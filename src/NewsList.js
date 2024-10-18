import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.length > 0 ? (
        news.map((article, index) => <NewsCard key={index} article={article} />)
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default NewsList;
