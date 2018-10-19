import React from 'react';
import Note from "./Note"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Linking,
 } from 'react-native';

export default class Todo extends React.Component {
  constructor (props){
    super(props);
    this.state={
      noteArray: [],
      noteText:"",
    }
    AsyncStorage.getItem("state").then((myState)=>{
      this.setState(JSON.parse(myState));
    });

  }

  render() {
    let notes = this.state.noteArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val}
      deleteMethod={
        ()=> this.deleteNote(key) } />
      });
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}> {"\n"} VAPID Goals </Text>
          <Button title="info" onPress={ ()=>{ Linking.openURL('https://wealthandrisk.nz/vapid-goals/')}} />

        </View>

        <ScrollView style={styles.scrollContainer} >
        {notes}

        </ScrollView>

        <View style={styles.footer}>
            <TextInput styke={styles.textInput}
            placeholder="            note"
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
            placeholderTextColor="black"
            underlineColorAndroid="transparent">

           </TextInput>
        </View>
        <TouchableOpacity onChangeText={this.saveData()} onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style = {styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

    );

    }
    saveData(){
      AsyncStorage.setItem("state",JSON.stringify(this.state));
    }


    addNote() {
      if (this.state.noteText){

        var d = new Date();
        this.state.noteArray.push({
          "date": d.getFullYear() +
          "/" + (d.getMonth()+1)+
          "/"+ d.getDate()
          +" "+d.getHours()
          +":"+d.getMinutes()
          +":"+d.getSeconds(),
          "note": this.state.noteText
        });

        this.setState ({ noteArray: this.state.noteArray})
        this.setState({ noteText:" "})
      }

  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }

}

const styles = StyleSheet.create({
  container : {
    flex:1,},
  header : {
      backgroundColor: "magenta",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
  headerText: {
      color: "white",
      fontSize:24,
      padding:26,
    },
  scrollContainer: {
      flex:1,
      marginBottom: 50,
  },
  footer : {
      position: "absolute",
      bottom:0,
      left:0,
      right:0,
      zIndex:10,
      height:50,
      backgroundColor: "#696969",
    },
  textInput : {
      alignSelf:"stretch",
      color:"#696969",
      padding: 20,
      backgroundColor: "#696969",
      borderTopWidth: 50  ,
      borderTopColor:"#ededed",
      bottom: 70,
    },
  addButton : {
      position:"absolute",
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:"#E91E63",
      width:70,
      height:70,
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      elevation:8,
    },
  addButtonText : {
      color:"#fff",
      fontSize: 40,
    }



});
