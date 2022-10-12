import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Items from '../Items/Items';

const Home = () => {
    const items = useLoaderData();
    const dt = items.data;
    console.log(dt);
    return (
        <div>
            <Hero></Hero>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    dt.map(item => <Items
                        key={item.id}
                        item={item}
                    ></Items>)
                }
            </div>


        </div>
    );
};

export default Home;