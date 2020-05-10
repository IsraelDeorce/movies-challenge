import React from 'react';

const MainHeader = () => {
  return (
    <header>
      <table className="titleBar">
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