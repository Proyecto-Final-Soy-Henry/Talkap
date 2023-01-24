import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Los parámetros siempre se tienen que pasar como SEARCH, FILTER Y HANDLE
// <SearchBar search={list} filter={"name"} handle={handleee} />

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  let allFilter = [];

  useEffect(() => {
    if (allFilter.length > 0) {
      props.handle(allFilter);
    }
     else {
     
      props.handle(["Not Find"]);
    }
  }, [input]);

  function handleChange(elem) {
    if (input) {
      allFilter = elem.search.filter((element) => {
        let searchUser = input.toUpperCase();
        let filter = elem.filter;
        return (
          searchUser && element[filter].toUpperCase().startsWith(searchUser)
        );
      });
    }
  }

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div>
      <form className="form">
        <input
          onChange={handleInput}
          value={input}
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      {input ? handleChange(props) :  props.handle("")}
    
    </div>
  );
}
