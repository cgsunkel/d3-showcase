import logo from './logo.svg';
import './App.css';
import { PieChart } from 'react-minimal-pie-chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PieChart
          data={[
            { title: 'Prospect', value: 7, color: '#E38627' },
            { title: 'Assigned', value: 2, color: '#C13C37' },
            { title: 'Active', value: 5, color: '##777fff' },
            { title: 'Verify win', value: 2, color: '#8800ff' },
            { title: 'Won', value: 2, color: '#990000' },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
