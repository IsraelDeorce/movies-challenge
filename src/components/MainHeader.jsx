import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="MainHeader-header">
      <table >
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="50" src="logo192.png" />
            </td>
            <td width="8" />
            <td>
              <h1>Shows Challenge</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  )
}

export default MainHeader;