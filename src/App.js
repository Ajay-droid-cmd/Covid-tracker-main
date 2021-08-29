import './App.css';
import { Statewise  } from './components/table'; 
import Countries from './components/Countries';
import { Stock } from './components/stock';
import { useState } from 'react';
import Form from './components/Form'
function App() {
  const [countryname, Setcountry] = useState('');
  function countries(country) {
    Setcountry(country);
  }
// function latlon(lat,lon) {
//   const [latitude, longitude ] ={}
// }
  return (
    <div className="App">
       <header className="header"> Charts Dashbord</header> <br></br><br></br>
      <Countries myprops={countries} />
  
      <Stock/>
      <Form/>
      <footer className="footer">
        <p className="footerp">Mask up.Stay Safe.Stay Strong.</p>
       <p className="footername">Made with love ♥ by TEAM QUANTA</p> 
       <p className="footername"></p>
      </footer>
    </div>
  );
}

export default App;


