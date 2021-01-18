import React from "react"
import { VictoryPie } from "victory"
import { storiesOf } from '@storybook/react'

const stageData = [
    { x: 'Prospect', y: 7 },
    { x: 'Assigned', y: 2 },
    { x: 'Active', y: 5 },
    { x: 'Verify win', y: 2 },
    { x: 'Won', y: 2 },
  ]

storiesOf('Victory', module)
  .add('Default', () => (
    <VictoryPie
        colorScale={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8b4513']} 
        data={stageData}
    />
  ))
  .add('Donut', () => (
    <VictoryPie
        colorScale={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8b4513']} 
        innerRadius={100}
        data={stageData}
    />
  ))