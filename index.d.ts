import {Component} from "react"
import {View} from "react-native"

export interface ViewsFanProps {
    views: View[],
    verticalOffset?: number,
    horizontalOffset?: number,
    maxAngle?: number,
    reverseOverlap?: boolean,
    containerStyle?: any
}

export default class ViewsFan extends Component {}