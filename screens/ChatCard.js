import React, { Component } from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

export default class ChatCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light_theme: true,
            chat_id: this.props.chat.key,
            chat_data: this.props.chat.value,
        };
    }
    render() {
        let post = this.state.chat_data
        return (
            <TouchableOpacity>
                <Text>{post.chat}</Text>
            </TouchableOpacity>
        )
    }
}
