import React, { useState, useEffect } from 'react';
import './App.css';
import ShowRow from './components/ShowRow';

const App = () => {
  const [rows, setRows] = useState([]);
  
  let showRows = [];
  const shows = [
    {id: 0, title: 'lol', overview: 'pewpew'},
    {id: 1, title: 'lol2', overview: 'pewpew2'}
  ];

  shows.forEach(show => showRows.push(<ShowRow show={show}/>));

  useEffect(() => {
    setRows(showRows);
  }, []);

  return (
    <div className="App">

      <table className='titleBar'>
        <tbody>
          <tr>
            <td>
              <img width="50" src="logo192.png"/>
            </td>
            <td width="8"/>
            <td>
              <h1>Movies Challenge</h1>
            </td>
          </tr>
        </tbody>
      </table>


      <input className='searchBar' placeholder="Enter search term" />
      {rows}
    </div>
  );
}

export default App;
