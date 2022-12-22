import { gql } from 'graphql-request';
import sortNewsByImage from './sortByImage';

export const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery($access_key: String!, $categories: String!, $keywords: String) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us,gb,vn "
        sort: "published_desc"
        keywords: $keywords
      ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
      }
    }
  `;
  const res = await fetch('https://kirkland.stepzen.net/api/quaffing-eagle/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 10000 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_KEY,
        categories: category,
        keywords: keywords,
      },
    }),
  });
  console.log('LOADING NEW DATA FROM API FOR CATEGORY -> ', category, keywords);
  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};
