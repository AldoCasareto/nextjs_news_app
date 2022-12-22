import React from 'react';
import { categories } from '../constants';
import { fetchNews } from '../utils/fetchNews';

const Home = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','));
  return <div>HomePage</div>;
};

export default Home;
