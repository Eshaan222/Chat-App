import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import firebase from 'firebase'
import ChatCard from './ChatCard'

export default class ChatScreen extends Component {
    constructor(){
        super();
        this.state={
            chat:[]
        }
    }
    componentDidMount(){
        this.fetchChat()
    }
    fetchChat = () => {
        firebase
          .database()
          .ref("/chat/")
          .on(
            "value",
            snapshot => {
              let chat = [];
              if (snapshot.val()) {
                Object.keys(snapshot.val()).forEach(function (key) {
                  chat.push({
                    key: key,
                    value: snapshot.val()[key]
                  });
                });
              }
              this.setState({ chat: chat });
            },
            function (errorObject) {
              console.log("The read failed: " + errorObject.code);
            }
          );
      };

    async addPost(){
        if(this.state.chat){
            let chat_data = {
                chat : this.state.chat,
                author: firebase.auth().currentUser.displayName,
                author_uid: firebase.auth().currentUser.uid,
                userId: firebase.auth().currentUser.email
            }
            await firebase
            .database()
            .ref('/chat/' + Math.random().toString().slice(2))
            .set(chat_data)
        }else{
            Alert.alert(
                "Error",
                "All fields are required!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
            );
        }
    }
    renderItem=({item:post})=>{
        <ChatCard post={post} />
    }
    keyExtractor = (item, index) => index.toString();
    render() {
            return (
            <View style={{flex:1}}>
                    <Text style={{alignSelf:'center',fontSize:RFValue(20)}}>Chat App</Text>
                
                <View style={styles.listStyle}>
                    <FlatList 
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    data={this.state.chat}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(chat)=>{
                        this.setState({chat:chat})
                    }} style={styles.inputStyle}></TextInput>
                    <TouchableOpacity onPress={()=>{this.addPost()}} style={styles.sendButtonStyle}><Image style={styles.sendImageStyle} source={require('../assets/send.png')}></Image></TouchableOpacity>
                </View>
                <View>

                </View>
            </View>
        )
    }
    }

const styles = StyleSheet.create({
    headStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputStyle:{
        borderWidth:1,
        borderRadius:RFValue(6),
        width:RFValue(340),
        marginBottom:RFValue(1),
        height:RFValue(40)
    },
    inputContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems:'flex-end'
    },
    sendImageStyle:{
        width:RFValue(40),
        height:RFValue(40),
        marginLeft:RFValue(10)
    }
})