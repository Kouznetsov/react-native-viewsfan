# ViewsFan 

This library allows to place views in a fan shape as shown below: 

## Examples

### 3 views

![3 views](https://i.imgur.com/ukWp5g5.png)

### 5 views

![5 views](https://i.imgur.com/2KhpYOY.png)

## Setup

### npm
`npm install react-native-viewsfan`

### yarn
`yarn add react-native-viewsfan --save`

### Integration example

```
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ViewsFan from "react-native-viewsfan"

export default class App extends Component {

    views = [];

    constructor(props) {
        super(props);
        const array = [], val = 5;

        for (let i = 0; i < val; i++)
            array.push(<View style={{borderRadius: 10, width: 70, height: 70, backgroundColor: i % 2 === 0 ? i === 0 ? "green" : "blue" : "red"}} />)
        this.views = array;
    }

    render() {
        return (
            <View style={styles.container}>
                <ViewsFan verticalOffset={20} horizontalOffset={15} maxAngle={40}  views={this.views} reverseOverlap={false}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

```

### Props

Name | Description | Required | Default Value
-----|-------------|--------------|-----
**views**: View[] | Array containing your views| **yes** | none
**verticalOffset**: number | Defines by how much each view will be under its neighbour | no | 20
**horizontalOffset**: number | Defines the marginRight to apply to each view | no | 20
**maxAngle**: number | Defines the maximum angle the edge's views can have | no | 45 (deg)
**reverseOverlap**: boolean | Whether or not the overlap should act as last view's zIndex > ... > first view's zIndex | no | false
