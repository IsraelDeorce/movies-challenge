import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from './Catalogue';
//import { shallow } from 'enzyme';

describe('Catalogue Component', () => {
  let wrapper;

//   const shallowCatalogue = () => {
//     if (!wrapper) wrapper = shallow(<Catalogue />);
//     return wrapper;
//   };

  beforeEach(() => {
    wrapper = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Catalogue/>, div);
  });
});
