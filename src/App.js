import logo from './logo.svg';
import './App.css';

const stringNew = 'Today is a great day';
const numberOne = 55;
const numberTwo = 23;
const boolOne = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: '#68c9e5'
        }}>
          Hello, World!
        </p>
        <div>
          {stringNew}, {boolOne && 'It is true'}, {boolOne ? 'boolOne is true' : 'boolOne is false'}
        </div>
        <div>
          {numberOne}, {numberOne - numberTwo}
        </div>
        <div>
          {undefined}
          {null}
          {false}
          {true}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
