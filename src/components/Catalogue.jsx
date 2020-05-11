import React, { useState, useEffect } from "react";
import './Catalogue.css';
import Show from "../components/Show"
import SearchService from "../services/searchService";
import { getJsonOrEmptyArray } from '../services/utils';

export const showsSearch = async searchValue => await SearchService.get(searchValue).then(promise => getJsonOrEmptyArray(promise)); 

const Catalogue = ({searchTerm}) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    showsSearch(searchTerm).then((res) => {
      setShows(res);
    });
  }, [searchTerm]);

  return (
    <div className='Catalogue-div'>
      {shows.map((show, i) => <Show key={i} show={show} />)}
    </div>
  )
}

export default Catalogue;