
import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import data from './data';

function App() {
    const list = data.map(item => {
    return ( 
      <Body
          //key={item.id}
          {...item}
        />
          
    )
   })

  return (
    <div className="App">
      <Navbar />
      <div className='body'>{list}</div>
      
    </div>
  );
}

export default App;
