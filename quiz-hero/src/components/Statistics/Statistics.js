import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Legend, CartesianGrid, Tooltip, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const dt = useLoaderData();

    const d = dt.data;
    console.log(d);
    // const dt = data.data;
    // const data = [dt.data]
    // console.log(typeof (data[0]));
    // console.log(data);
    return (
        <div>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart width={500} height={400} data={d}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <Line type='monotone' dataKey="total" stroke='#82ca9d'></Line>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                </LineChart>
            </ResponsiveContainer>
            <p>Statistics page</p>
        </div>
    );
};

export default Statistics;