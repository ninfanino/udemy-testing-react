import React from 'react';
import Todo from './Todo';
import  { configure, shallow, mount } from "enzyme";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component unit test", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: 'buy milk'
    };
    let component;

    beforeEach(() => {
        component = shallow(<Todo {...props} />);
    });

    it("should render 1 <Todo /> component", () => {
        expect(component).toHaveLength(1);
        expect(component.find("li")).toHaveLength(1);
    });

    it("should render props correctly", () => {
        expect(component.props().children).toEqual('buy milk');
    });

    it("should set props correctly", () => {
        component.setProps({text: "hello"});
        expect(component.props().children).toEqual('hello');
    });

    it("should call onClick handler when Todo component is clicked", () => {
        component.simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});

describe("<Todo /> styling behavior", () => {
    const mockFn = jest.fn();
    it("should not have line through style when todo is incompleted", () => {
        const component = shallow(<Todo onClick={mockFn} completed={false} text="go shopping" />);
        expect(component.props().style).toEqual({"textDecoration": "none"})
    })

    fit("should have line through style when todo is completed", () => {
        const component = shallow(<Todo onClick={mockFn} completed={true} text="go shopping" />);
        expect(component.props().style).toEqual({"textDecoration": "line-through"})
    })
});