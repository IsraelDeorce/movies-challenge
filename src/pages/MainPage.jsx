import React, { useState, useEffect } from "react";
import "../App.css";
import ShowRow from "../components/ShowRow";
import SearchService from "../services/searchService";

const showSearch = async (searchValue) => {
  let rows = [];
  const response = await SearchService.get(searchValue);
  if (response.ok) {
    const responseJson = await response.json();
    responseJson.forEach((show) => {
      const showInfo = show.show;
      showInfo &&
        rows.push({
          id: showInfo.id,
          name: showInfo.name,
          image: showInfo.image,
          summary: showInfo.summary,
        });
    });
  }
  return rows;
};

const MainPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    showSearch(searchTerm).then((res) => {
      setShows(res);
    });
  }, [searchTerm]);

  return (
    <body className='App-body'>
      <input
        className="searchBar"
        placeholder="Enter a show name"
        value={searchTerm}
        onChange={handleChange}
      />

      {shows.map((show) => (
        <ShowRow show={show} />
      ))}
    </body>
  )
}

export default MainPage;