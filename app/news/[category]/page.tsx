import React from 'react';
import { categories } from '../../../constants';
import { fetchNews } from '../../../utils/fetchNews';
import NewsList from '../../components/NewsList';

type Props = {
  params: { category: Category };
};

const Category = async ({ params: { category } }: Props) => {
  console.log(`category = `, category);
  const news: NewsResponse = await fetchNews(category);

  console.log(news);

  return (
    <div>
      <h1 className='headerTitle'>{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default Category;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
