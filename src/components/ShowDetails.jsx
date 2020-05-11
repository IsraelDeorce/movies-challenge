import React from "react";
import './ShowDetails.css'

const ShowDetails = ({ filteredShow }) => {
  return (
    <td className="ShowDetails-td">
      <p><span>Name:</span> {filteredShow.name}</p>
      <p><span>Duration:</span> {filteredShow.duration}</p>
      <p><span>Schedule:</span> {filteredShow.scheduleTime} {filteredShow.scheduleDays}</p>
      <p><span>Status:</span> {filteredShow.status}</p>
      <p><span>Show Type:</span> {filteredShow.showType}</p>
      <p><span>Genres:</span> {filteredShow.genres}</p>
      <p><span>Episodes:</span> {filteredShow.episodes}</p>
      <p><span>CreatedBy:</span> {filteredShow.createdBy}</p>
      <p><span>Cast:</span> {filteredShow.cast}</p>
    </td>
  )
}

export default ShowDetails;