import React, { useState } from 'react';
import './Show.css';

const Show = ({ show }) => {
  const [showDetails, setShowResults] = useState(false);

  const handleOnClick = () => setShowResults(!showDetails);

  console.log('show:', show);
  return (
    <table key={show.id && show.id} >
      <tbody>
        <tr>
          <td>
            <button type="button" onClick={handleOnClick}>
              <img alt="poster" src={show.image && show.image.medium} />
            </button>

          </td>
          {showDetails &&
            <td className="Show-details-td">
              {show.name && show.name}
              {show.summary && <span dangerouslySetInnerHTML={{ __html: show.summary }}></span>}
            </td>
          }
        </tr>
      </tbody>
    </table>
  );
}
export default Show;