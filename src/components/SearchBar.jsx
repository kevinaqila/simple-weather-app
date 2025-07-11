import { useEffect, useRef, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [inputCity, setInputCity] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputCity.trim() === "") return;
    onSearch(inputCity);
    setInputCity("");
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Enter the location..." value={inputCity} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
