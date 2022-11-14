import { useParams, Link } from 'react-router-dom';

function CountriesDetails({ countries }) {
  const { countryID } = useParams();

  const countrySelected = countries.find((country) => {
    return country.alpha3Code === countryID;
  });

  const countryBorders = [...countrySelected.borders]

  return (
    <div className="col-7">
      <h1>{countrySelected.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countrySelected.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countrySelected.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryBorders.map((c) => {
                  return (
                    <li key={c}>
                      <Link to={`/${c}`}>{c}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountriesDetails;
