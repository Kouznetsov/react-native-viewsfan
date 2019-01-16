import React from 'react';
import {View} from 'react-native';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewsFan from "../ViewsFan"

configure({adapter: new Adapter()});

let array = [];

beforeAll(() => {
    const val = 5;
    for (let i = 0; i < val; i++)
        array.push(<View style={{borderRadius: 10, width: 70, height: 70, backgroundColor: i % 2 === 0 ? i === 0 ? "green" : "blue" : "red"}} />)
});

describe("ViewsFan class tests", () => {

    describe("props tests", () => {

        it("does not crash if no prop is passed", () => {
            const wrapper = shallow(<ViewsFan />);

            expect(wrapper).toMatchSnapshot();
        });

        it("does not crash if null is passed as views", () => {
            const wrapper = shallow(<ViewsFan views={null} />);

            expect(wrapper).toMatchSnapshot();
        });

        it("does not crash if null is passed as verticalOffset", () => {
            const wrapper = shallow(<ViewsFan verticalOffset={null} />);

            expect(wrapper).toMatchSnapshot();
        });

        it("does not crash if null is passed as horizontalOffset", () => {
            const wrapper = shallow(<ViewsFan horizontalOffset={null} />);

            expect(wrapper).toMatchSnapshot();
        });

        it("does not crash if null is passed as maxAngle", () => {
            const wrapper = shallow(<ViewsFan maxAngle={null} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("display tests", () => {

        it("displays without crashing", () => {
            const wrapper = shallow(<ViewsFan views={array} />);

            expect(wrapper).toMatchSnapshot();
        });

        it("displays the same number of views that ara passed as parameter", () => {
            const wrapper = shallow(<ViewsFan views={array} />);

            expect(wrapper.children()).toHaveLength(array.length);
        });
    });
});