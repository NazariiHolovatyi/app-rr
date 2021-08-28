import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strum',
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores odio quia fugiat assumenda quam, autem eligendi voluptates quas expedita sunt est officiis dolores voluptas voluptate beatae possimus doloribus. Itaque."
    },
    {
        id: 2,
        title: 'Czym jest teoria strum',
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores odio quia fugiat assumenda quam, autem eligendi voluptates quas expedita sunt est officiis dolores voluptas voluptate beatae possimus doloribus. Itaque."
    },
    {
        id: 3,
        title: 'Czym jest teoria strum',
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, maiores odio quia fugiat assumenda quam, autem eligendi voluptates quas expedita sunt est officiis dolores voluptas voluptate beatae possimus doloribus. Itaque."
    },
]

const HomePage = () => {
    const artList = articles.map(articles => (
        <Article key={articles.id} {...articles} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;