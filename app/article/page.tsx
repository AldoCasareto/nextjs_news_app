import { notFound } from 'next/navigation';
import React from 'react';
import moment from 'moment';

type Props = {
  searchParams?: Article;
};

const ArticlePage = ({ searchParams }: Props) => {
  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    return notFound();
  }

  const article = searchParams;

  console.log(typeof article.author);

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
        {article.image && (
          <img
            className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'
            alt={article.title}
            src={article.image}
          />
        )}
        <div className='px-10'>
          <h1 className='headerTitle px-0 no-underline pb-2'>{article.title}</h1>
          <div className='flex divide-x-2 space-x-4'>
            <h2 className='font-bold'>
              By: {article.author === 'null' ? 'unknown' : article.author}
            </h2>
            <h2 className='font-bold pl-4'>Source: {article.source}</h2>
            <p className='pl-4'>{moment(article.published_at).format('MMM DD, YYYY')}</p>
          </div>
          <p className='pt-4'>{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
