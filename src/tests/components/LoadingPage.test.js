import { shallow } from 'enzyme';
import React from 'react';
import LogadingPage from '../../components/LoadingPage';


test('should render loading page' , () => {
    const wrapper = shallow(<LogadingPage />);
    expect(wrapper).toMatchSnapshot();
});