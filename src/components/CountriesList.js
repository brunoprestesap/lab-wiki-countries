import {Link} from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className="list-group">
        {countries.map((countrie) => {
            const alphaCode = countrie.alpha2Code.toLowerCase();
            const flag = `https://flagpedia.net/data/flags/icon/72x54/${alphaCode}.png`
            return (
                <div className="listCountries" key={countrie.alpha3Code}>
                    <img src={flag} alt='flag'></img>
                    <Link className="listCountries list-group-item list-group-item-action" to={`/${countrie.alpha3Code}`}>{countrie.name.common}</Link>
                </div>
            )
        })}
        
      </div>
    </div>
  );
}

export default CountriesList;
