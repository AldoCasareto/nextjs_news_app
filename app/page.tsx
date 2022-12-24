import React from 'react';
import { categories } from '../constants';
import { fetchNews } from '../utils/fetchNews';
import NewsList from './components/NewsList';

const Home = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','));

  return <NewsList news={news} />;
};

export default Home;
