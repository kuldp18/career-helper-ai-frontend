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
              className="relative inline-flex items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-[#25283d] rounded-full hover:bg-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#000]">
                Register
              </span>
            </a>
          </Link>

          <Link to="/signin">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start inline-block px-8 py-3 overflow-hidden font-medium transition-all bg-[#25283d] rounded-full hover:bg-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#000]">
                Login
              </span>
            </a>
          </Link>
          <Link to="/predict">
            <a
              href="#_"
              class="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Predict your career?
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
}

export default App;
