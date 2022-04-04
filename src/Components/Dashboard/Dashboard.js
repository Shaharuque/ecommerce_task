import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, LineChart, Line, Legend, BarChart, Bar } from 'recharts';




const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2461,
            "revenue": 8040
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4623,
            "revenue": 12450
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7236,
            "revenue": 16701
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5259,
            "revenue": 24040
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6301,
            "revenue": 15090
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6470,
            "revenue": 16100
        }
    ]

    return (
        <div className=' grid md:grid-cols-2 gap-2 p-5'>

            <div className='p-4'> 
                <h1 className='text-center text-teal-800 font-serif'>Inverment vs Revenue vs Sell</h1>
                <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="investment" stroke="blue" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                    <Line type="monotone" dataKey="sell" stroke="green" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                    <Line type="monotone" dataKey="revenue" stroke="red" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Legend verticalAlign="top" height={36} />
                    <XAxis dataKey="month" />
                    <YAxis dataKey='investment' />
                    <Tooltip />
                </LineChart>
            </div>

            <div className='flex justify-center'>
                <ResponsiveContainer width={600} height={400}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <Legend verticalAlign="top" height={36} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#90EE90" fill="#90EE90" />
                        <Area type="monotone" dataKey="sell" stroke="#40E0D0" fill="#40E0D0" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='p-4'>
                <h1 className='text-center text-teal-800 font-serif'>Inverment vs Revenue vs Sell(Pie-Chart)</h1>
                <ResponsiveContainer width={700} height={400}>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={80} innerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%"  outerRadius={50} innerRadius={35} fill="#82ca9d" label />
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={30}  fill="#DE3163" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='flex items-center'>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="data" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="#DE3163" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;