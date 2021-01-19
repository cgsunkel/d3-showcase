import { PieChart } from 'react-minimal-pie-chart'
import { storiesOf } from '@storybook/react'
import { BLUE, YELLOW, GREEN, TURQUOISE, GRASS_GREEN } from 'govuk-colours'

const stageData = [
  { title: 'Prospect', value: 7, color: BLUE },
  { title: 'Assigned', value: 2, color: YELLOW },
  { title: 'Active', value: 5, color: GREEN },
  { title: 'Verify win', value: 2, color: TURQUOISE },
  { title: 'Won', value: 2, color: GRASS_GREEN },
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
