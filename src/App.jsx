import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import Display from "./Display/Display";
import "./App.css";

const API_URL = "https://api.spacexdata.com/v3/capsules";
let initialCapsules = [];

function App() {
  const [capsules, setCapsules] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState({});
  const [clicked, setClicked] = useState(false);

  async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    initialCapsules = data;
    setCapsules(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(()=> {
  //   handleSearchResults(searchResults)
  // },[setCapsules])

  console.log("app rendered", capsules);

  function handleSearchResults(results) {
    setSearchResults(results)
    console.log("initial", initialCapsules)
    if(results.length===0)
    {
      setCapsules(initialCapsules);
    }
    else
    {
      setCapsules(results)
    }
  }

  function handleDisplay(value) {
    setDisplay(value);
  }

  function handleClicked(value) {
    setClicked(!value);
  }
  // console.log(searchResults);
  // console.log(capsules);
  // console.log(display);
  console.log("clicked", clicked)

  return (
    <div className="app">
      <Banner />
      
      <div className="search-bar-container">
        <SearchBar handleSearchResults={handleSearchResults}/>
        <div className="search-result-display">
          {
            searchResults.length!==0 ? <p>Search Results: {searchResults.length}</p> : <p>No results found!</p>
          }
        </div>
        <div className="search-type">
          <input type="radio" name="search-type" />
          <label>Type</label>
          <input type="radio" name="search-type" />
          <label>Status</label>
          <input type="radio" name="search-type" />
          <label>Original Launch</label>
        </div>
      </div>

      <div className="container">
        <Display display={display} clicked={clicked} handleClicked={handleClicked} />
        {capsules.map((capsule) => (
          <Card key={capsule.capsule_serial} info={capsule} handleDisplay={handleDisplay} handleClicked={handleClicked}/>
        ))}
      </div>
    </div>
  );
}

export default App;
