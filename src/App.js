import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import { Index } from './Components';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Index />
    </Router>
  );
}

export default App;
