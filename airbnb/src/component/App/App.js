import './App.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return ( 
      <Card 
          key={item.id}
          {...item}
        />
          
    )
   })

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <div className="card-slideshow">
        {cards}
      </div>
      
    </div>
  );

   
}

export default App;
