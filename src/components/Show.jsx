import React, { useState, useEffect } from 'react';
import './Show.css';
import ShowDetails from './ShowDetails';
import ShowService from '../services/showService';
import { getJsonOrEmptyArray } from '../services/utils';

const defaultData = '--';

/** Filters a given show details by its basic object returned from show search */
const getFilteredShow = (show) => {
  let filteredShow = {
    name: defaultData,
    poster: 'imgPlaceholder.jpg',
    duration: defaultData,
    scheduleTime: defaultData,
    scheduleDays: defaultData,
    status: defaultData,
    showType: defaultData,
    genres: defaultData
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
  showDetail.schedule && showDetail.schedule.time && (filteredShow.scheduleTime = `time: ${showDetail.schedule.time || defaultData}`);
  showDetail.schedule && showDetail.schedule.days && (filteredShow.scheduleDays = formatScheduleDays(showDetail.schedule.days));
  showDetail.status && (filteredShow.status = showDetail.status);
  showDetail.type && (filteredShow.showType = showDetail.type);
  showDetail.genres && (filteredShow.genres = showDetail.genres.join(', ') || defaultData);

  return filteredShow;
};

/** Filters a show extra details after calling de api three times passing the show's id */
const getShowExtraDetails = async showId => {
  let extraDetails = {
    episodes: defaultData,
    createdBy: defaultData,
    cast: defaultData
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
  extraDetails.createdBy = getCreatorsNames(singlePromise[1]) || defaultData;
  extraDetails.cast = getCastNames(singlePromise[2]) || defaultData;
  return extraDetails;
};

const Show = ({ show }) => {
  const [displayDetails, setDisplayDetail] = useState(false);
  const [filteredShow, setFilteredShow] = useState({});
  const [showId, setShowId] = useState(0);

  useEffect(() => {
    let filteredShow = getFilteredShow(show);
    if (showId)
      getShowExtraDetails(showId).then(extraDetails => {
        filteredShow = Object.assign(filteredShow, extraDetails);
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
    <table id='show-table-id' key={show && show.id} >
      <tbody>
        <tr>
          <td>
            <div>
              <img onClick={handleOnClick} alt='poster' src={filteredShow && filteredShow.poster} />
            </div>
          </td>
          {displayDetails && <ShowDetails filteredShow={filteredShow}/>}
        </tr>
      </tbody>
    </table>
  );
}

export default Show;