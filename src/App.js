import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList'
import './App.css'

const categories = ['World', 'Sports', 'Technology', 'Business', 'Entertainment', 'Science'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('World');
  const [news, setNews] = useState([]);
  const API_KEY = 'dfec1391582b80030ae20508693b6033';

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  const fetchNews = async (category) => {
    try {
      const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&country=us&max=10&apikey=${API_KEY}`);
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>GNews News Website</h1>
        <nav>
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </nav>
      </header>
      <NewsList news={news} />
    </div>
  );
}

export default App;
