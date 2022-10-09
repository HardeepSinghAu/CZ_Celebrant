import './App.css';
import Nav from './Components/Nav'
import About from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <About />
      <Footer />
    </div>
  );
}

export default App;
