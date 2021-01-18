import React from "react"
import { Chart } from "react-google-charts"
import { storiesOf } from '@storybook/react'

const stageData = [
    ['Stage', 'Value'],
    ['Prospect', 7],
    ['Assigned', 2],
    ['Active', 5],
    ['Verify win', 2],
    ['Won', 2]
  ]

storiesOf('ReactGoogleCharts', module)
  .add('Default', () => (
    <Chart
      width={'800px'}
      height={'400px'}
      chartType="PieChart"
      data={stageData}
      options={{
          title: 'My projects'
      }}
      rootProps={{ 'data-testid': '1'}}
      legendToggle
    />
  ))
  .add('Donut', () => (
    <Chart
      width={'800px'}
      height={'400px'}
      chartType="PieChart"
      data={stageData}
      options={{
          title: 'My projects',
          pieHole: 0.4,
      }}
      rootProps={{ 'data-testid': '3'}}
    />
  ))