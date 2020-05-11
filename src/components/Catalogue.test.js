import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from './Catalogue';

describe('Catalogue Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Catalogue/>, div);
  });
});
