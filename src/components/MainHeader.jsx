import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header id='main-header-id' className='MainHeader-header'>
      <table >
        <tbody>
          <tr>
            <td>
              <img id='img-header-id' alt='poster' src='logo192.png' />
            </td>
            <td width='8' />
            <td>
              <h1 id='h1-header-id'>Shows Challenge</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  )
}

export default MainHeader;