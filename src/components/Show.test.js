import React from 'react';
import ReactDOM from 'react-dom';
import Show from './Show';
//import { shallow } from 'enzyme';

describe('Show Component', () => {
  let wrapper;

//   const shallowShow = () => {
//     if (!wrapper) wrapper = shallow(<Show />);
//     return wrapper;
//   };

  beforeEach(() => {
    wrapper = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Show/>, div);
  });
});
