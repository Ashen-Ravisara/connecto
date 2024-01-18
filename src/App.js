import './App.css';
import Home from './Home.js';
import NavBar from './NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({ duration: 1000, once: false })
  return (
    <div className="App">
      <NavBar/>
      <div className='container'> 
        <Home/>
      </div>
    </div>
  );
}

export default App;
