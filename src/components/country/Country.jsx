const Country = ({country, hundelVisited, showCountryDetails}) => {
    const{name, flags} = country;

    return (
        <div className="my-10">
            <div className="card h-[420px] bg-base-100 shadow shadow-sky-300">
                <figure className="px-5 pt-10">
                    <img src={flags.png} alt={name.common} className="rounded-xl w-72 h-44" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.common}</h2>
                    <p>{name.official}</p>
                    <div className="card-actions">
                    <button onClick={() => hundelVisited(country)} className="btn btn-primary">Visited</button>
                    <button className="btn" onClick={()=>{document.getElementById('my_modal_1').showModal(); showCountryDetails(country);}}>Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;