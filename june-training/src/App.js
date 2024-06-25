import "./App.css";
import CarComponent from "./components/Car";
import Timer from "./components/Timer";
import LoginForm from "./components/Form";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  const myName = "Roopali";
  const date = new Date().toLocaleDateString();
  const collegeName = "HEC";
  return (
    <div className="App">
      {/* <h1>{myName}</h1>
    <h2>{date}</h2>
    <h3>{collegeName}</h3>
    <h4>{4*4}</h4>
    <CarComponent/>
    <Timer/>
    <LoginForm/> */}
      <Registration />
      {/* <Login/> */}
    </div>
  );
}

export default App;
