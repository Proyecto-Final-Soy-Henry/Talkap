


import { useEffect, useState,useRef } from "react";

// Los parámetros siempre se tienen que pasar como SEARCH, FILTER Y HANDLE
// <SearchBar search={list} filter={"name"} handle={handleee} />

export default function SearchBar(props) {
 let  allFilter = useRef([]);
  const [input, setInput] = useState("");


  useEffect(()=>{
    function handleChange(elem) {
   
      allFilter =  elem.search.filter((element) => {
        let searchUser = input.toUpperCase();
        let filter = elem.filter;
        return element[filter].toUpperCase().startsWith(searchUser)
        
      });
      
  }
    handleChange(props);
  
  
  },[input,allFilter])


 





  function handleInput(e) {

    e.preventDefault();
    setInput(e.target.value);
    props.handle(allFilter)
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
      {/* {input ? handleChange(props) :  props.handle("")} */}
    
    </div>
  );
}
