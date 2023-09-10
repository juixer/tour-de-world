import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import Modal from "../modal/modal";
import { addToLocalStorage, getLocalStorage, removeLocalStorage } from "../local storage/localstorage";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
  useEffect(() => {
    const showCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    showCountries();
  }, []);
  // load card from local storage
  useEffect(() =>{
    console.log('object', countries.length);
    if(countries.length){
      const storedData = getLocalStorage();
      const savedData = []
      for (const id of storedData) {
        const country = countries.find(country => country.cca3 === id);
        if(country){
          savedData.push(country);
        }
      }
      setVisitedCountries(savedData);
    }
  }, [countries])

  const hundelVisited = country => {
    const cca3 = country.cca3;
    const newVisitedCountries = [...visitedCountries];
    if (visitedCountries.some(visited => visited.cca3 === cca3)) {
      window.alert('Already visited');
    }else{
        newVisitedCountries.push(country);
        setVisitedCountries(newVisitedCountries);
    }
    addToLocalStorage(cca3);
  };
    const removeCountry= (cca3) =>{
    const filteredCountry = visitedCountries.filter((item) => item.cca3 !== cca3);
    setVisitedCountries(filteredCountry);
    removeLocalStorage(cca3);
  }

  const showCountryDetails = country => {
      setCountryDetails(country)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center py-5 font-bold">
        Total Countries:{" "}
        <span className="text-sky-500">{countries.length}</span>
      </h1>
      <h1 className="text-4xl text-center py-5 font-bold">
        Visited Countries:{" "}
        <span className="text-sky-500">{visitedCountries.length}</span>
      </h1>
      {/* MODAL */}
      <Modal countryDetails={countryDetails}></Modal>
      {/* MODAL */}
      <div className=" flex flex-wrap gap-5 my-10">
        {visitedCountries.map((country) => {
          return (
            <div key={country.cca3}>
              <div className="card w-52 h-36 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={country.flags.png} alt="" />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-xl">{country.name.common}</h2>
                  <button onClick={()=>removeCountry(country.cca3)} className="btn btn-accent">Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country, idx) => {
          return (
            <Country
              country={country}
              key={idx}
              hundelVisited={hundelVisited}
              showCountryDetails={showCountryDetails}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
