import React from 'react'
import { storiesOf } from '@storybook/react'
import { PieChart, Pie, Legend, Cell } from 'recharts'

const stageData = [
  { name: 'Prospect', value: 7 },
  { name: 'Assigned', value: 2 },
  { name: 'Active', value: 5 },
  { name: 'Verify win', value: 2 },
  { name: 'Won', value: 2 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8b4513']

const stories = storiesOf('Rechart', module)

stories.add('default', () => (
    <PieChart width={400} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={stageData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
        >
            {
                stageData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
        <Legend verticalAlign="bottom" />
    </PieChart>
))

stories.add('donut', () => (
    <PieChart width={400} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={stageData}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            label
        >
            {
                stageData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
        <Legend verticalAlign="bottom" />
    </PieChart>
))