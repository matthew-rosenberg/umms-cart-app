import './App.css';
import { Container } from 'react-bootstrap'
import Home from './HomePage/Home';

function App() {
  return (
    <Container fluid className="App">
      <Home></Home>
      {/* <header className="App-header">
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
      </header> */}
    </Container>
  );
}

export default App;
