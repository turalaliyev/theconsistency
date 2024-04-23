import { Typography } from '@material-tailwind/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import LatestCard from '../../UI/LatestCard';

export default function ArticlePage() {
  const params = useParams();

  console.log(params.id);

  const EuropeNews = {
    id: 1,
    title: 'Brussels shooting: Police shoot dead attacker who killed Swedes',
    description:
      'Belgian police have shot dead a man who killed two Swedish nationals in the capital, Brussels, on Monday evening.',
    article: `The 45-year-old man, named in Belgian media as Abdesalem, was shot in a café in the Schaerbeek neighbourhood. The 45-year-old man, named in Belgian media as Abdesalem, was shot in a café in the Schaerbeek neighbourhood. The 45-year-old man, named in Belgian media as Abdesalem, was shot in a café in the Schaerbeek neighbourhood. The 45-year-old man, named in Belgian media as Abdesalem, was shot in a café in the Schaerbeek neighbourhood. The 45-year-old man, named in Belgian media as Abdesalem, was shot in a café in the Schaerbeek neighbourhood.
    A third Swedish citizen was seriously injured in the attack, which took place 5km (3 miles) from the stadium where Belgium was playing Sweden to qualify for the Euro 2024 football tournament. A third Swedish citizen was seriously injured in the attack, which took place 5km (3 miles) from the stadium where Belgium was playing Sweden to qualify for the Euro 2024 football tournament. A third Swedish citizen was seriously injured in the attack, which took place 5km (3 miles) from the stadium where Belgium was playing Sweden to qualify for the Euro 2024 football tournament. A third Swedish citizen was seriously injured in the attack, which took place 5km (3 miles) from the stadium where Belgium was playing Sweden to qualify for the Euro 2024 football tournament.
    The victims are all men in their 60s and 70s, Swedish officials said.
    The attack began at 19:00 (17:00 GMT) on Monday, when a man opened fire with an automatic rifle on the Boulevard d'Ypres - north of the city centre. The attack began at 19:00 (17:00 GMT) on Monday, when a man opened fire with an automatic rifle on the Boulevard d'Ypres - north of the city centre. The attack began at 19:00 (17:00 GMT) on Monday, when a man opened fire with an automatic rifle on the Boulevard d'Ypres - north of the city centre. The attack began at 19:00 (17:00 GMT) on Monday, when a man opened fire with an automatic rifle on the Boulevard d'Ypres - north of the city centre.
    Videos shared online showed a man on a scooter, dressed in an orange fluorescent jacket, pull up and start shooting passers-by.
    He then chases people into the hallway of an apartment building to gun them down. Four gunshots can be heard.
    Shortly after the attack, he filmed himself admitting to the killings.
    In the video, the Arabic-speaking gunman refers to fighting for God and says he has killed Swedish people.
    The suspect was tracked down on Tuesday morning following an overnight manhunt, during which France also stepped up security measures at the Belgian border.
    He was found after a witness informed the police that he had seen the suspect in a café near his accommodation in Schaerbeek, north of Brussels, and that he was carrying a military weapon and a bag of clothes.
    The suspect was shot in the chest and sent to hospital, where he received intensive care treatment but died from his wounds.
    He is believed to be a Tunisian man who was in Belgium illegally, after his asylum application was rejected in 2020. Sweden's prosecutor's office said it believes he was inspired to commit the killings by the Islamic State (IS) group. He is believed to be a Tunisian man who was in Belgium illegally, after his asylum application was rejected in 2020. Sweden's prosecutor's office said it believes he was inspired to commit the killings by the Islamic State (IS) group. He is believed to be a Tunisian man who was in Belgium illegally, after his asylum application was rejected in 2020. Sweden's prosecutor's office said it believes he was inspired to commit the killings by the Islamic State (IS) group. He is believed to be a Tunisian man who was in Belgium illegally, after his asylum application was rejected in 2020. Sweden's prosecutor's office said it believes he was inspired to commit the killings by the Islamic State (IS) group.
    Belgian Interior Minister Annelies Verlinden said the automatic weapon found on him was the same as the one used in the attack.`,
    author: 'Sofia Bettiza',
    date: new Date('2023-10-17'),
    image:
      'https://ichef.bbci.co.uk/news/820/cpsprodpb/14109/production/_131458128_4382023bd983ca977229fb8d2e5d96e0629aab140_461_4700_26452000x1125.jpg',
    category: ['Europe', 'Brussels'],
  };

  const paragraphs = EuropeNews.article.split('\n').map(par => {
    return (
      <div>
        <Typography className="mb-3 text-justify" variant="p">
          {par}
        </Typography>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row px-16 py-4 bg-blue-gray-50">
        {/* <div className=" h-64 w-full md:w-[50rem] mr-2">
          <img
            src={EuropeNews.image}
            alt={EuropeNews.image}
            className="h-full w-full object-cover"
          />
        </div> */}
        <div className="flex flex-col justify-between">
          <Typography className="mb-4" variant="h2">
            {EuropeNews.title}
          </Typography>
          <Typography className="mb-4" variant="p">
            {EuropeNews.description}
          </Typography>
          <div className="h-80 w-full md:w-[75%]">
            <img
              src={EuropeNews.image}
              alt={EuropeNews.image}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mb-4">Brusselin petuxlari</div>
          <dov className="flex items-center">
            <Typography variant="p" className="mr-4">
              By {EuropeNews.author}
            </Typography>
            <div className="flex">
              <div>{EuropeNews.date.getDay()}</div>/
              <div>{EuropeNews.date.getMonth()}</div>/
              <div>{EuropeNews.date.getFullYear()}</div>
            </div>
          </dov>
        </div>
      </div>
      <div className="p-8 md:ml-32 md:mr-72">
        {/* <Typography variant="p">{EuropeNews.article}</Typography> */}
        <Typography variant="p">{paragraphs}</Typography>
      </div>
      <div className="mx-12">
        <Typography className="flex justify-center" variant="h1">
          Read More
        </Typography>
        <div className="flex">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
      </div>
    </div>
  );
}
