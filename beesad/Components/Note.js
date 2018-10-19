import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
 } from 'react-native';
//class for handling all notes in TODO.js. 
export default class Note extends React.Component {
  //unique ID for every note so that TODO.js can seperate them.
  render() {
    return (
      <View key={this.props.keyvalue} style={styles.note}>
          {/*the date of the note you have created. */}
        <Text style={styles.noteText}> {this.props.val.date}</Text>
          {/* The text of the note you have created */}
        <Text style={styles.noteText}> {this.props.val.note}</Text>
          {/* this is the deletion mechanisme for a note. */}
      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          {/* A way to make the button visible and easily understandable */}
        <Text style={styles.noteDeleteText}> D </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position:"relative",
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:"#ededed",
  },
  noteText: {
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"#E91E63",
  },
  noteDelete: {
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#2980b9",
    padding:10,
    top:10,
    bottom:10,
    right:10,
  },
  noteDeleteText:{
    color: "white",
  },



});
