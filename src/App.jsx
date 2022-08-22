import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Components/Content';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Content/>
      </Router>

    </div>
  );
}

export default App;
