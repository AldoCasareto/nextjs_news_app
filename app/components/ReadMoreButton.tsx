'use client';

import { useRouter } from 'next/navigation';

type ArticleProps = {
  article: Article;
};

const ReadMoreButton = ({ article }: ArticleProps) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    const url = `/article?${queryString}`;
    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className='w-full cursor-pointer text-center mt-3 bg-orange-400 rounded-b-lg py-1.5 text-sm'
    >
      Read More
    </div>
  );
};

export default ReadMoreButton;
