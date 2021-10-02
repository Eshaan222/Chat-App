import React, { Component } from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'

export default class Logout extends Component {
    componentDidMount() {
        firebase.auth().signOut();
    }
    render() {
        return (
            <Text>Logout</Text>
        )
    }
}
