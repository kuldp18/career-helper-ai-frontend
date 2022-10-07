import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroImage from './img/hero.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl text-white">AI Career Helper</h1>
        <p className="text-lg text-white">Decide your career using AI</p>
        <div className="flex gap-4">
          <Link to="/signup">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-[#25283d] rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#000]">
                Register
              </span>
            </a>
          </Link>

          <Link to="/signin">
            <a
              href="#_"
              class="relative inline-flex items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-[#25283d] rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#000]">
                Login
              </span>
            </a>
          </Link>
        </div>
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
}

export default App;
