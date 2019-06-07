import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Plan from '.';

const reportProps = {
    formValues: {
        name: "test name",
        value: 50,
        startDate: "2019-06-20",
        endDate: "2019-07-10"
    },
}

it('Plan renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Plan { ...reportProps } />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders header for Plan component', () => {
    const wrapper = shallow(<Plan { ...reportProps } />);
    const header = (<header>
                        <h1>Plan</h1>
                        <span className="err">{""}</span>
                    </header>);
    expect(wrapper.contains(header)).toEqual(true);
});

it('renders submit button for Plan component form', () => {
    const wrapper = shallow(<Plan { ...reportProps } />);
    const submitButton = (<div className="input-container">
                        <button className="form-input form-submit" type="submit">Submit</button>
                    </div>);
    expect(wrapper.contains(submitButton)).toEqual(true);
});