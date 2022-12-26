import React from 'react';
import moment from 'moment';
import he from 'he';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  const { category, description, image, published_at, source, title } = article;

  return (
    <article className='flex flex-col bg-slate-100 dark:bg-slate-800  rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out'>
      {image && (
        <img className='h-56 w-full object-cover rounded-t-lg shadow-md' alt={title} src={image} />
      )}

      <div className='flex-1 flex flex-col'>
        <div className='flex-1 flex flex-col p-5'>
          <h2 className='text-lg font-bold'>{he.decode(title)}</h2>
          <section className='flex-1 mt-2'>
            <p className='line-clamp-6'>{he.decode(description)}</p>
          </section>
          <footer className='capitalize text-xs text-right ml-auto pt-5 text-gray-400'>
            {source}-{category}-{moment(published_at).fromNow(true)}
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};

export default Article;
