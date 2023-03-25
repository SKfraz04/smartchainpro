import './App.css';
import MyNavbar from './Component/UI/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Component/Pages/Homepage';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Homepage />
    </div>
  );
}

export default App;
