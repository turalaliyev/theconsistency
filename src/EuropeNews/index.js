import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";

export default function EuropeNews() {
    const EuropeNews = {
        id: 1,
        title: 'Brussels shooting: Police shoot dead attacker who killed Swedes',
        description:
          'Belgian police have shot dead a man who killed two Swedish nationals in the capital, Brussels, on Monday evening.',
        author: 'Sofia Bettiza',
        date: new Date('2023-10-17'),
        image:
          'https://ichef.bbci.co.uk/news/820/cpsprodpb/14109/production/_131458128_4382023bd983ca977229fb8d2e5d96e0629aab140_461_4700_26452000x1125.jpg',
        category: ['Europe', 'Brussels'],
    }

    return (<div>
        <Typography variant="h4" className="ml-2 mb-3">Europe</Typography>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card className="mb-3 mx-2 w-auto max-w-md rounded-none">
            <img src={EuropeNews.image} alt='Brussels Tragedy' />
            <div className="p-2">
            <Typography variant="h5">{EuropeNews.title}</Typography>
            <Typography>{EuropeNews.description}</Typography>
            <div className='flex justify-between items-center'>
            <Typography variant="h6">{EuropeNews.author}</Typography>
            <Button variant="text">READ MORE</Button>
            </div>
            </div>
        </Card>
        <Card className="mb-3 mx-2 w-auto max-w-md rounded-none">
            <img src={EuropeNews.image} alt='Brussels Tragedy' />
            <div className="p-2">
            <Typography variant="h5">{EuropeNews.title}</Typography>
            <Typography>{EuropeNews.description}</Typography>
            <div className='flex justify-between items-center'>
            <Typography variant="h6">{EuropeNews.author}</Typography>
            <Button variant="text">READ MORE</Button>
            </div>
            </div>
        </Card>
        <Card className="mb-3 mx-2 w-auto max-w-md rounded-none">
            <img src={EuropeNews.image} alt='Brussels Tragedy' />
            <div className="p-2">
            <Typography variant="h5">{EuropeNews.title}</Typography>
            <Typography>{EuropeNews.description}</Typography>
            <div className='flex justify-between items-center'>
            <Typography variant="h6">{EuropeNews.author}</Typography>
            <Button variant="text">READ MORE</Button>
            </div>
            </div>
        </Card>
        </div>
    </div>);
};