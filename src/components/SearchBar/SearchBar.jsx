import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({handleSearchResults}) {
  const [input, setInput] = useState("");
  // console.log(input);

  async function fetchData(value) {
    const response = await fetch("https://api.spacexdata.com/v3/capsules");
    const data = await response.json();
    // console.log(data);
    const result = data.filter((capsule) => {
      return (
        value &&
        capsule &&
        capsule.details &&
        capsule.details.toLowerCase().includes(value)
      );
    });
    console.log(result);
    handleSearchResults(result);
  }

  function handleInput(value) {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to Search..."
        value={input}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
