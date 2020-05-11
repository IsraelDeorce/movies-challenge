import React from 'react';
import './ShowDetails.css'

const ShowDetails = ({ filteredShow = {} }) => {
  return (
    <td id='show-details-td' className='ShowDetails-td'>
      <p>
        <label>Name:</label>
        <span> {filteredShow.name}</span> 
      </p>
      <p>
        <label>Duration:</label>
        <span> {filteredShow.duration}</span> 
      </p>
      <p>
        <label>Schedule:</label>
        <span> {filteredShow.scheduleTime} {filteredShow.scheduleDays}</span> 
      </p>
      <p>
        <label>Status:</label>
        <span> {filteredShow.status}</span> 
      </p>
      <p>
        <label>Show Type:</label>
        <span> {filteredShow.showType}</span> 
      </p>
      <p>
        <label>Genres:</label>
        <span> {filteredShow.genres}</span> 
      </p>
      <p>
        <label>Episodes:</label>
        <span> {filteredShow.episodes}</span> 
      </p>
      <p>
        <label>CreatedBy:</label>
        <span> {filteredShow.createdBy}</span> 
      </p>
      <p>
        <label>Cast:</label>
        <span> {filteredShow.cast}</span> 
      </p>
    </td>
  )
}

export default ShowDetails;