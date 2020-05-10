import React, { useState, useEffect } from 'react';
import './Show.css';
import ShowService from '../services/showService';
import { getJsonOrEmptyArray } from '../services/utils';

const getShowExtraDetails = async showId => {
  let extraDetails = {
    episodes: '--',
    createdBy: '--',
    cast: '--'
  };

  const episodesPromise = ShowService.getEpisodes(showId).then(promise => getJsonOrEmptyArray(promise));
  const crewPromise = ShowService.getCrew(showId).then(promise => getJsonOrEmptyArray(promise));
  const castPromise = ShowService.getCast(showId).then(promise => getJsonOrEmptyArray(promise));

  const singlePromise = await Promise
    .all([
      episodesPromise,
      crewPromise,
      castPromise
    ]);

  const getCreatorsNames = crewArray => crewArray.filter(crew => crew.type && crew.type === 'Creator').map(creator => creator.person && creator.person.name).join(', ');
  
  const getCastNames = castArray => castArray.map(cast => {
    let castDescription = '';
    const personName = cast.person && cast.person.name;
    const characterName = cast.character && cast.character.name;

    if (personName && characterName) castDescription = castDescription.concat(personName, ' as ', characterName);
    else if (personName) castDescription = castDescription.concat(personName);
    return castDescription;
  }).join(', ');

  extraDetails.episodes = `${singlePromise[0].length} episodes`;
  extraDetails.createdBy = getCreatorsNames(singlePromise[1]) || '--';
  extraDetails.cast = getCastNames(singlePromise[2]) || '--';
  return extraDetails;
};

const filterShowJson = (show) => {
  let filteredShow = {
    name: '--',
    poster: 'imgPlaceholder.jpg',
    duration: '--',
    scheduleTime: '--',
    scheduleDays: '--',
    status: '--',
    showType: '--',
    genres: '--'
  };

  if (!show || !show.show) return filteredShow;

  const showDetail = show.show;
  const formatScheduleDays = (daysArray) => {
    if (!Array.isArray(daysArray) || !daysArray.length) return '';
    let scheduleDays = 'days: ';
    return scheduleDays.concat(daysArray.join(', '));
  }

  showDetail.name && (filteredShow.name = showDetail.name);
  showDetail.image && showDetail.image.medium && (filteredShow.poster = showDetail.image.medium);
  showDetail.runtime && (filteredShow.duration = showDetail.runtime);
  showDetail.schedule && showDetail.schedule.time && (filteredShow.scheduleTime = `time: ${showDetail.schedule.time}`);
  showDetail.schedule && showDetail.schedule.days && (filteredShow.scheduleDays = formatScheduleDays(showDetail.schedule.days));
  showDetail.status && (filteredShow.status = showDetail.status);
  showDetail.type && (filteredShow.showType = showDetail.type);
  showDetail.genres && (filteredShow.genres = showDetail.genres.join(', '));

  return filteredShow;
};

const Show = ({ show }) => {
  const [displayDetails, setDisplayDetail] = useState(false);
  const [filteredShow, setFilteredShow] = useState(show);
  const [showId, setShowId] = useState(0);

  useEffect(() => {
    let filteredShow = filterShowJson(show);
    if (showId)
      getShowExtraDetails(showId).then(extraDetails => {
        filteredShow.episodes = extraDetails.episodes;
        filteredShow.createdBy = extraDetails.createdBy;
        filteredShow.cast = extraDetails.cast;
        setFilteredShow(filteredShow);
      });
    else setFilteredShow(filteredShow);

  }, [showId, show]);

  const handleOnClick = () => {
    setDisplayDetail(!displayDetails);
    if (!showId)
      setShowId(show && show.show && show.show.id);
  };

  return (
    <table key={show.id && show.id} >
      <tbody>
        <tr>
          <td>
            <div onClick={handleOnClick}>
              <img alt='poster' src={filteredShow.poster} />
            </div>
          </td>
          {displayDetails &&
            <td className="Show-details-td">
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
          }
        </tr>
      </tbody>
    </table>
  );
}

export default Show;