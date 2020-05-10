import React, { useState, useEffect } from 'react';
import './Show.css';

// Episodes
// Show Episodes List {{url}}/shows/:id/episodes
// pegar count e link?

// Created by
// Show Crew {{url}}/shows/:id/crew
// find type Creator

// cast
// Show Cast {{url}}/shows/:id/cast
// person {}; character{}


// console.log('isArray: ', Array.isArray(responseJson));
// responseJson.forEach((show) => {
//   const showInfo = show.show;
//   showInfo &&
//     rows.push({
//       id: showInfo.id,
//       name: showInfo.name,
//       image: showInfo.image,
//       summary: showInfo.summary,
//     });
// });

const filterShowJson = (show) => {
  let filteredShow = {
    name: 'name',
    poster: 'imgPlaceholder.jpg',
    duration: 'duration',
    scheduleTime: 'schedule Time',
    scheduleDays: 'schedule Days',
    status : 'status',
    showType: 'showType',
    genres: 'genres',
    // episodes: '',
    // createdBy: '',
    // cast: ''
  };

  if (!show || !show.show) return filteredShow;

  const showDetail = show.show;
  const formatScheduleDays = (daysArray) => {
    if(!Array.isArray(daysArray) || !daysArray.length) return '';
    let scheduleDays = 'days: ';
    return scheduleDays.concat(daysArray.join(','));
  }

  showDetail.name && (filteredShow.name = showDetail.name);
  showDetail.image &&showDetail.image.medium && (filteredShow.poster = showDetail.image.medium);
  showDetail.runtime && (filteredShow.duration = showDetail.runtime);
  showDetail.schedule && showDetail.schedule.time && (filteredShow.scheduleTime = `time: ${showDetail.schedule.time}`)
  showDetail.schedule && showDetail.schedule.days && (filteredShow.scheduleDays = formatScheduleDays(showDetail.schedule.days))
  showDetail.status && (filteredShow.status = showDetail.status);
  showDetail.type && (filteredShow.showType = showDetail.type);
  showDetail.genres && (filteredShow.genres = showDetail.genres.join(','));
  
  return filteredShow;
};

const Show = ({ show }) => {
  const [showDetails, setShowResults] = useState(false);
  const [filteredShow, setFilteredShow] = useState(show);

  useEffect(() => {
    setFilteredShow(filterShowJson(show));
  }, []);

  const handleOnClick = () => setShowResults(!showDetails);

  return (
    <table key={show.id && show.id} >
      <tbody>
        <tr>
          <td>
            <div onClick={handleOnClick}>
              <img alt='poster' src={filteredShow.poster} />
            </div>
          </td>
          {showDetails &&
            <td className="Show-details-td">
              <p><span>Name:</span> {filteredShow.name}</p>
              <p><span>Duration:</span> {filteredShow.duration}</p>
              <p><span>Schedule:</span> {filteredShow.scheduleTime} {filteredShow.scheduleDays}</p>
              <p><span>Status:</span> {filteredShow.status}</p>
              <p><span>Show Type:</span> {filteredShow.showType}</p>
              <p><span>Genres:</span> {filteredShow.genres}</p>
            </td>
          }
        </tr>
      </tbody>
    </table>
  );
}

export default Show;