import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

describe('MainPage Component', () => {
  let wrapper;

  const shallowMainPage = () => {
    if (!wrapper) wrapper = shallow(<MainPage />);
    return wrapper;
  };

  beforeEach(() => {
    wrapper = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainPage/>, div);
  });

  it('renders the right components in the correct order', () => {
    const mainPageDiv = shallowMainPage().find('div#mainPage-id');
    expect(mainPageDiv.children()).toHaveLength(3);
    expect(mainPageDiv.childAt(0).find('MainHeader').exists()).toBe(true);
    expect(mainPageDiv.childAt(1).find('div#mainPage-input-id').exists()).toBe(true);
    expect(mainPageDiv.childAt(2).find('Catalogue').exists()).toBe(true);
  });
});
