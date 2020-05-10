import React, { useState, useEffect } from 'react';
import './App.css';
import ShowRow from './components/ShowRow';
import SearchService from './services/searchService';

const showSearch = async (searchValue) => {
  let rows = [];
  const response = await SearchService.get(searchValue);
  if(response.ok) {
    const responseJson = await response.json();
    responseJson.forEach(show => {
      const showInfo = show.show;
      showInfo && rows.push(
        {
          id: showInfo.id,
          name: showInfo.name,
          image: showInfo.image,
          summary: showInfo.summary
        });
    });
  }   
  return rows;
}

const App = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    showSearch(searchTerm).then(res => {
      setShows(res)
    });
  }, [searchTerm]);

  return (
    <div className="App">

      <table className='titleBar'>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="50" src="logo192.png"/>
            </td>
            <td width="8"/>
            <td>
              <h1>Shows Challenge</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input 
        className='searchBar' 
        placeholder='Enter search term'
        value={searchTerm}
        onChange={handleChange}/>

      {shows.map(show => (
        <ShowRow show={show}/>
      ))}
    </div>
  );
}

export default App;
