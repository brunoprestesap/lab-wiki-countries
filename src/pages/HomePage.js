import CountriesDetails from "../components/CountriesDetails";

function HomePage({countries}) {
    return (
        <div className='container'>
            <div className='row'>
                <CountriesDetails countries={countries}/>
            </div>

        </div>
    )
}

export default HomePage;