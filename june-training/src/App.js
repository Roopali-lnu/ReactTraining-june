import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import IncrementDecrement from './components/IncrementDecrement';

function App() {
  const myName="Roopali";
  const date =new Date().toLocaleDateString();
  const collegeName= "HEC";
  return (
    <div className="App">
    <h1>{myName}</h1>
    <h2>{date}</h2>
    <h3>{collegeName}</h3>
    <h4>{4*4}</h4>
    <Car/>
  
    </div>
  );
}

export default App;
