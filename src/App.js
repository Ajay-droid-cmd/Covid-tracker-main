import './App.css';
import { Statewise  } from './components/table'; 
import Countries from './components/Countries';
import Map from './components/Maps';
import { Stock } from './components/stock';
import { useState } from 'react';

function App() {
  const [countryname, Setcountry] = useState('');
  function countries(country) {
    Setcountry(country);
  }
function latlon(lat,lon) {
  
}
  return (
    <div className="App">
       <header className="header"> Geo Spatial Covid tracker</header> <br></br><br></br>
      <Countries myprops={countries} />
      <Map /> 
      <Stock/>
      <footer className="footer">
        <p className="footerp">Mask up.Stay Safe.Stay Strong.</p>
       <p className="footername">Made with love ♥ by TEAM QUANTA</p> 
       <p className="footername"></p>
      </footer>
    </div>
  );
}

export default App;


