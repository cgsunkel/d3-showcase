import MinimalPieChart from '../index'
import { storiesOf } from '@storybook/react'

import readme from '../readme.md'

const data = [
  { title: 'Prospect', value: 7, color: '#E38627' },
  { title: 'Assigned', value: 2, color: '#C13C37' },
  { title: 'Active', value: 5, color: '##777fff' },
  { title: 'Verify win', value: 2, color: '#8800ff' },
  { title: 'Won', value: 2, color: '#990000' },
]
 
 storiesOf('MinimalPieChart', module)
  .addParameters({
    options: { theme: undefined },
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => (
    <MinimalPieChart
      data={data}
    />
  ))
