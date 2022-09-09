import { createContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Menu from './Components/Menu/Menu';

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark')
  const [sideBar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sideBar)


  return (
    <ThemeContext.Provider value={{ theme, setTheme, sideBar, setSideBar, showSideBar }}>
      <div className="App" id={theme} >
        <Router>
          <Menu />
            <Content />
        </Router>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
