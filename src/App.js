import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CountriesJSON from './countries.json';
import CountriesDetails from './components/CountriesDetails';
import CountriesList from './components/CountriesList';

function App() {

  const [countries] = useState(CountriesJSON);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:countryID"
              element={<CountriesDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
