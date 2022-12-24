import React from 'react';

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  const { author, category, country, description, image, published_at, source, title, url } =
    article;

  return (
    <article>
      <div>
        {image && (
          <img
            className='h-56 w-full object-cover rounded-t-lg shadow-md'
            alt='article image'
            src={image}
          />
        )}
      </div>
      {title}
    </article>
  );
};

export default Article;
