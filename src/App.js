
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      
    </div>
  );
}

export default App;
