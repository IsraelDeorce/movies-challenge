import React, { useState, useEffect } from "react";
import './MainPage.css';
import Show from "../components/Show";
import SearchService from "../services/searchService";
import { getJsonOrEmptyArray } from '../services/utils';

const showSearch = async searchValue => await SearchService.get(searchValue).then(promise => getJsonOrEmptyArray(promise)); 

const MainPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    showSearch(searchTerm).then((res) => {
      setShows(res);
    });
  }, [searchTerm]);

  return (
    <div>
      <input
        className='searchBar'
        placeholder='Enter a show search term'
        value={searchTerm}
        onChange={handleChange}
      />
      <div className='Shows-div'>
        {shows.map((show, i) => <Show key={i} show={show} /> )}
      </div>
    </div>
  )
}

export default MainPage;