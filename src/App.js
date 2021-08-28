import './App.css';
import Countries from './components/Countries';
import { useState } from 'react';

function App() {
  const [countryname, Setcountry] = useState('');
  function countries(country) {
    Setcountry(country);
  }
  return (
    <div className="App">
      <header className="header"> COUNTRY WISE COVID STATS</header>
      <Countries myprops={countries} />
       {/* {countryname === 'India' && <States />}  */}
      <footer className="footer">
        <p className="footerp">Mask up.Stay Safe.Stay Strong.</p>
       {/*  <p className="footername">Covid tracker by Ajay</p> */}
       <p className="footername"></p>
      </footer>
    </div>
  );
}

export default App;
