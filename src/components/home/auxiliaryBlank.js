import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

export default class Index extends Component {
    render() {
        const { options } = this.props.data
        const { height } = options
        return <View style={{height}}/>
    }
}

const styles = StyleSheet.create({

});