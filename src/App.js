
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import Content from './components/main-content/main-content.component';
import Clientcontent from './components/content/content.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Header/>
    < Content/>
    <Clientcontent />
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
    </div>
  );
}

export default App;
