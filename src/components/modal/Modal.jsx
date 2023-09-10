const modal = ({countryDetails}) => {
    const{name, flags, cioc, capital, region, area, population} = countryDetails;
    return (
        <div>
            <div>
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center">
                <h3 className="font-bold text-2xl text-sky-400 mb-5 ">{name?.common}</h3>
                <div className="flex justify-center">
                    <img src={flags?.png} className="w-36 text-center"></img>
                </div>
                <p className="mb-2 mt-3 text-xl">Official Name: <span className="text-sky-400">{name?.official}</span></p>
                <p className="mb-2 text-xl">CIOC: <span className="text-sky-400">{cioc? cioc : 'N/A'}</span></p>
                <p className="mb-2 text-xl">Currencies: <span className="text-sky-400">{countryDetails?.currencies?.BDT.name}</span></p>
                <p className="mb-2 text-xl">Capital: <span className="text-sky-400">{capital}</span></p>
                <p className="mb-2 text-xl">Region: <span className="text-sky-400">{region}</span></p>
                <p className="mb-2 text-xl">Area: <span className="text-sky-400">{area}</span></p>
                <p className="mb-2 text-xl">Population: <span className="text-sky-400">{population}</span></p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            </div>
        </div>
    );
};

export default modal;