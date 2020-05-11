import React from "react";
import ReactDOM from "react-dom";
import MainHeader from "./MainHeader";
import { shallow } from "enzyme";

describe("MainHeader Component", () => {
  let wrapper;

  const shallowMainHeader = () => {
    if (!wrapper) wrapper = shallow(<MainHeader />);
    return wrapper;
  };

  beforeEach(() => {
    wrapper = undefined;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MainHeader />, div);
  });

  it("renders image on td correctly", () => {
    const imageTr = shallowMainHeader().find("header#main-header-id table tbody tr").childAt(0).find("img#img-header-id");
    expect(imageTr.exists()).toBe(true);
    expect(imageTr.props().src).toBe("logo192.png");
    expect(imageTr.props().alt).toBe("poster");
  });
});
