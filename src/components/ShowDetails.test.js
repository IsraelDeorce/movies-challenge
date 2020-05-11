import React from "react";
import ReactDOM from "react-dom";
import ShowDetails from "./ShowDetails";
import { shallow } from "enzyme";

describe("ShowDetails Component", () => {
  let wrapper;
  let props;
  const labelsArray = [
    'Name:',
    'Duration:',
    'Schedule:',
    'Status:',
    'Show Type:',
    'Genres:',
    'Episodes:',
    'CreatedBy:',
    'Cast:'
  ];

  const shallowShowDetails = () => {
    if (!wrapper) wrapper = shallow(<ShowDetails {...props} />);
    return wrapper;
  };

  beforeEach(() => {
    props = {
      filteredShow: undefined,
    };
    wrapper = undefined;
  });

  it("renders without crashing", () => {
    const tr = document.createElement("tr");
    ReactDOM.render(<ShowDetails />, tr);
  });

  it('renders a td of details with 9 children', () => {
    expect(shallowShowDetails().find("td#show-details-td").children()).toHaveLength(9);
  });

  it.each([[0], [1], [2], [3], [4], [5], [6], [7], [8]])
  ("td chield at index %s has correct label inside a paragraph", (chieldIndex) => {
    expect(shallowShowDetails().find("td#show-details-td").childAt(chieldIndex).find('p label').text()).toBe(labelsArray[chieldIndex]);
  });

  it("renders a td with correct value for each child when they exist", () => {
    props.filteredShow = {
      name: "nameMock",
      duration: "durationMock",
      scheduleTime: "scheduleTimeMock",
      scheduleDays: "scheduleDaysMock",
      status: "statusMock",
      showType: "showTypeMock",
      genres: "genresMock",
      episodes: "episodesMock",
      createdBy: "createdByMock",
      cast: "castMock",
    };

    expect(shallowShowDetails().find("td#show-details-td").childAt(0).find('span').text()).toBe(' nameMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(1).find('span').text()).toBe(' durationMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(2).find('span').text()).toBe(' scheduleTimeMock scheduleDaysMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(3).find('span').text()).toBe(' statusMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(4).find('span').text()).toBe(' showTypeMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(5).find('span').text()).toBe(' genresMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(6).find('span').text()).toBe(' episodesMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(7).find('span').text()).toBe(' createdByMock');
    expect(shallowShowDetails().find("td#show-details-td").childAt(8).find('span').text()).toBe(' castMock');
  });

  it("renders a td with empty text for each child when they do not exist", () => {
    props.filteredShow = {};

    expect(shallowShowDetails().find("td#show-details-td").childAt(0).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(1).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(2).find('span').text()).toBe('  ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(3).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(4).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(5).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(6).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(7).find('span').text()).toBe(' ');
    expect(shallowShowDetails().find("td#show-details-td").childAt(8).find('span').text()).toBe(' ');
  });
});
