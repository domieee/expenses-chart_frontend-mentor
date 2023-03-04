
import './App.css'
import data from './data/data.json'
import Header from './components/header/Header';
import Chart from './components/chart/Chart';

function App() {

  console.log(data);

  return (
    <div className="card">
      <Header/>
      <Chart/>
    </div>
  )
}

export default App
