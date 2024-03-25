'use client'

import React, { PureComponent } from 'react';
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    num: 50,
  },
  {
    name: 'Feb',
    num: 60,
  },
  {
    name: 'Mar',
    num: 40,
  },
  {
    name: 'Apr',
    num: 100,
  },
  {
    name: 'May',
    num: 60,
  },
  {
    name: 'June',
    num: 80,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recruitment Analytics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"gray", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="num" stroke="black" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
