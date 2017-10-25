import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import testData from './test-data/menu';
import ReactNestedMenu from './components/ReactNestedMenu';
import './testSetup';

it('renders without crashing', () => {
    const wrapper = shallow(<ReactNestedMenu menuData={testData}/>);
});

it('renders a <ul> tag', () => {
    const wrapper = shallow(<ReactNestedMenu menuData={testData}/>);
    expect(wrapper.find('ul').length).toEqual(2);
});

it('is passed linkTransformer function that returns a React element', () => {
    const linkTransformer = (menuItem) => {

        return (
            <a href={menuItem.url}>{ menuItem.title }</a>
        )
    };

    const wrapper = shallow(<ReactNestedMenu menuData={testData} navParentClassname="menu" linkTransformer={linkTransformer}/>).instance();
    const navItem = { url : '/', title: 'Home' };
    const el = wrapper.linkTransformer(navItem);
    expect(React.isValidElement(el) ? true : false).toBeTruthy();
});
