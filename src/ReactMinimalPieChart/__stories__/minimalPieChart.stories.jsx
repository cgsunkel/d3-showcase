import { PieChart } from 'react-minimal-pie-chart'
import { storiesOf } from '@storybook/react'

const stageData = [
  { title: 'Prospect', value: 7, color: '#0088FE' },
  { title: 'Assigned', value: 2, color: '#00C49F' },
  { title: 'Active', value: 5, color: '#FFBB28' },
  { title: 'Verify win', value: 2, color: '#FF8042' },
  { title: 'Won', value: 2, color: '#8b4513' },
]

storiesOf('MinimalPieChart', module)
  .add('Default', () => (
    <PieChart
      data={stageData}
      label={({ dataEntry }) => dataEntry.value}
      labelStyle={(index) => ({
        fill: stageData[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      radius={42}
      labelPosition={112}
    />
  ))
