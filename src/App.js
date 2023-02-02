import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './component/homepage/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
