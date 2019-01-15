import React, {Component} from "react";
import {
    StyleSheet,
    View,
} from "react-native"

export default class ViewsFan extends Component {

    anglesAndPositions;

    constructor(props) {
        super(props);
        this.V_OFFSET = this.props.verticalOffset;
        this.H_OFFSET = this.props.horizontalOffset;
        this.MAX_ANGLE = this.props.maxAngle;
        this.anglesAndPositions = this._genData();
    }

    _genData = () => {
        const picLen = this.props.views.length;
        const h = picLen / 2;
        let values = [], otherHalf = [];

        for (let i = Math.floor(picLen / 2); i > 0; i--) {
            values.push({angle: this.MAX_ANGLE * (i / h), marginTop: this.V_OFFSET * i});
        }
        otherHalf = [...values].reverse();
        values = values.map(v => {
            return {angle: v.angle * -1, marginTop: v.marginTop}
        });
        if (picLen % 2 !== 0)
            values.push({angle: 0, marginTop: this.V_OFFSET / 3});
        const final = [...values, ...otherHalf];
        console.log(final);
        return final
    };

    _generateViews = () => {
        const views = [];

        this.props.views.forEach((view, index) => {
            views.push(React.cloneElement(view, {
                key: "" + index, style: {
                    ...view.props.style,
                    zIndex: 100 + index,
                    marginLeft: index === 0 ? 0 : -this.H_OFFSET,
                    marginTop: this.anglesAndPositions[index].marginTop,
                    transform: [{rotate: this.anglesAndPositions[index].angle + "deg" }]
                }
            }))
        });
        return views;
    };

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                {this._generateViews()}
            </View>
        );
    }
}

ViewsFan.defaultProps = {
    verticalOffset: 20,
    horizontalOffset: 20,
    reverseOverlap: false,
    maxAngle: 45
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
});
