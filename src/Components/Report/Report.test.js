import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Report from '.';
const reportProps = {
    name: "test name",
    value: 50,
    startDate: "2019-06-20",
    endDate: "2019-07-10"
}

it('Report renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Report { ...reportProps } />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header for Report component', () => {
    const wrapper = shallow(<Report { ...reportProps } />);
    const header = <h1>Report</h1>;
    expect(wrapper.contains(header)).toEqual(true);
});

it('renders name for Report component', () => {
    const wrapper = shallow(<Report { ...reportProps } />);
    const header = (<div className="input-container">
                        <div><h3>Name: {reportProps.name}</h3></div>
                    </div>);
    expect(wrapper.contains(header)).toEqual(true);
});