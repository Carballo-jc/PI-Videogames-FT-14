import React from "react";
import { Link } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Navbar from "./Navbar";

Enzyme.configure({ adapter: new Adapter() });

describe("<Navbar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("It should render three <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('The first link should be part of the logo must have the text "Video Games App" and lead to /', () => {
    
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/");
    expect(wrapper.find(Link).at(0).text()).toEqual("Video Games App");
  });
  it('The second link must have the text "HOME" and lead to /', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/");

    expect(wrapper.find(Link).at(1).text()).toEqual("HOME");
  });
  it('The third link should contain the text "+ADD GAMER" and change the path to /create', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual("/create");

    expect(wrapper.find(Link).at(2).text()).toEqual("+ADD GAMER");
  });
});
