import React from 'react';
import { Carousel } from '@material-tailwind/react';
import TopNewsCart from '../UI/TopNewsCard';

function TopNews() {
  const article = {
    title: 'Britain is supplying depleted uranium round to Ukraine',
    description:
      'The new one-woman play ‘The Road to Damascus’ reinterprets the biblical story of Saul and the tale of Little Red Riding Hood as an allegory for white complicity in the US prison system and the possibility of redemption through anti-racism.',
    author: 'Phil Miller',
    date: new Date('2023-03-23'),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Panzer_II_Saumur.JPG/1200px-Panzer_II_Saumur.JPG',
    category: ['Europe'],
  };

  let articles = [];

  for (let i = 0; i < 5; i++) {
    articles.push(article);
    articles[i].id = i;
  }

  return (
    <div>
      <Carousel
        className="h-[450px] md:h-96"
        loop={true}
        autoplay={true}
        duration="9000"
      >
        {articles.map(article => {
          return (
            <TopNewsCart
              key={article.id}
              id={article.id}
              title={article.title}
              date={article.date}
              description={article.description}
              image={article.image}
              author={article.author}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default TopNews;
