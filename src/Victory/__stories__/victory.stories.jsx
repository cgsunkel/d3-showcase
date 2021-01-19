import React from "react"
import { VictoryPie } from "victory"
import { storiesOf } from '@storybook/react'
import { BLUE, YELLOW, GREEN, TURQUOISE, GRASS_GREEN } from 'govuk-colours'

const stageData = [
    { x: 'Prospect', y: 7 },
    { x: 'Assigned', y: 2 },
    { x: 'Active', y: 5 },
    { x: 'Verify win', y: 2 },
    { x: 'Won', y: 2 },
  ]

const colours = [BLUE, YELLOW, GREEN, TURQUOISE, GRASS_GREEN]

storiesOf('Victory', module)
  .add('Default', () => (
    <VictoryPie
        colorScale={colours} 
        data={stageData}
    />
  ))
  .add('Donut', () => (
    <VictoryPie
        colorScale={colours} 
        innerRadius={100}
        data={stageData}
    />
  ))