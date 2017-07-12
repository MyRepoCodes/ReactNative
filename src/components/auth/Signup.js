import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput,Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form';
import { Container, Input, Button, Item, Spinner} from '../common';
import styles from './authStyle';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  authError: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearState();
  }

  handleFormSubmit(props) {
    const { email, password, firstname, lastname } = props;

    this.props.signUpUser({ email, password, firstname, lastname });
  }

  render() {
    const { handleSubmit } = this.props;

    return (     
        <Container style={{backgroundColor:'red'}}>
          <View style={styling.chatBlock}>
            <View style={styling.chatBlock}>
              <View style={styling.chatBlockInner}>
                <Text style={styling.chatTitle}>
                  Hello, welcome to OpHealth.
                </Text>
                <Text style={styling.chatSubtitle}>
                  I am Hannah your virtual health manager.
                </Text>
                <View style={styling.chatRoom}>
                  <ScrollView>
                    <View style={styling.chatRoomRow}>
                      <View style={styling.chatBubble}>
                        <Text style={styling.chatBubbleText}> Hi, How are you?</Text>
                      </View>
                    </View>
                    <View style={styling.chatRoomRow}>
                      <View style={[styling.chatBubble, styling.chatBubbleRight]}>
                        <Text style={styling.chatBubbleText}> Hi, How are you?</Text>
                      </View>
                    </View>
                    <View style={styling.chatRoomRow}>
                      <View style={styling.chatBubble}>
                        <Text style={styling.chatBubbleText}> Hi, How are you?</Text>
                      </View>
                    </View>
                    <View style={styling.chatRoomRow}>
                      <View style={[styling.chatBubble, styling.chatBubbleRight]}>
                        <Text style={styling.chatBubbleText}> Hi, How are you?</Text>
                      </View>
                    </View>
                    <View style={styling.chatInputBox}>         
                      <View style={styling.chatInputCell}> 
                        <TextInput  underlineColorAndroid={'transparent'}
                        style={styling.chatInput}
                        placeholder="Type here to translate!"
                        />             
                      </View>
                      <View style={styling.chatInputButton}> 
                        <TouchableOpacity>
                          <Image style={styling.arrowImage} source={require('../../img/arrow.png')} />  
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>
                </View>                
              </View>

              <View style={styling.chatTagButtons}> 
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                   <Text style={styling.chatTagText}>Yes Please</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                    <Text style={styling.chatTagText}>Yes</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                    <Text style={styling.chatTagText}>NO</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                    <Text style={styling.chatTagText}> please elaborate</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                   <Text style={styling.chatTagText}>Yes Please</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                    <Text style={styling.chatTagText}>Yes</Text> 
                  </TouchableOpacity>
                </View>
                <View style={styling.chatTagButton}> 
                  <TouchableOpacity>
                    <Text style={styling.chatTagText}>NO</Text> 
                  </TouchableOpacity>
                </View>
              </View>

            </View>
        </View>
        </Container>     
    );
  }
}

const styling = StyleSheet.create({
    formbox: {
      backgroundColor:'#fff',
      borderRadius:8,
      padding:15,
    },
    chatBlock: {
      borderRadius:8,
      paddingTop:5,
      flex:1,
    },
    chatBlockInner:{
      flex:1
    },
    chatTitle:{
      fontSize: 24,
      marginBottom:10,      
      color:'#fff'
    },
    chatSubtitle: {
      fontSize: 20,
      margin:0,
      color:'#fff'
    },
    chatRoom: {
     marginTop:35,
     flex:1,
    },
     chatRoomRow: {   
     flexDirection:'row',     
     flexWrap:'wrap',
     alignItems: 'center',
     marginBottom:30,
    },
    chatBubble: {
      padding:20,
      backgroundColor:'#1f96cc',
      paddingTop:8,
      paddingBottom:8,
      paddingLeft:18,
      paddingRight:18,
      borderTopLeftRadius:0,
      borderTopRightRadius:25,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,

    },
     chatBubbleText: {
      fontSize:17,
      color:'#fff'
    },
    chatBubbleRight: {
      backgroundColor:'#005596',
      marginLeft:'auto',
      borderTopLeftRadius:25,
      borderTopRightRadius:0,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
    },
    chatInputBox:{
      flexDirection:'row',
    },
    chatInputCell:{
      flex:1,
    },
    chatInput:{
      height:70,
      borderBottomWidth:1,
      borderBottomColor:'#07a8d8',
      color:'#fff',
      fontSize:20,
    },
    chatInputButton:{
      position:'absolute',
      backgroundColor:'#1f96cc',
      right:0,
      top:10,
      height:45,
      width:45,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center'
    },
    chatTagButtons:{
      flexDirection:'row',
      flexWrap:'wrap',
      marginTop:30
    },
    chatTagButton:{   
      marginRight:8,
      marginBottom:8,
    },
    chatTagText:{     
      backgroundColor:'#005596',
      borderRadius: 25,   
      fontSize:15,
      color: '#fff',
      padding:10,
      paddingRight:15,
      paddingLeft:15,
    } 
});

const validate = (props) => {
  const errors = {};
  const fields = ['firstname', 'lastname', 'email', 'password'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });

  if (props.firstname && props.firstname.length < 3) {
    errors.firstname = 'Minimum of 3 characters';
  } else if (props.firstname && props.firstname.length > 20) {
    errors.firstname = 'Maximum of 20 characters';
  }

  if (props.lastname && props.lastname.length < 3) {
    errors.lastname = 'Minimum of 3 characters';
  } else if (props.lastname && props.lastname.length > 20) {
    errors.lastname = 'Maximum of 20 characters';
  }

  if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
    errors.email = 'please provide valid email';
  }

  if (props.password && props.password.length < 6) {
    errors.password = 'minimum 6 characters';
  }

  if (props.password !== props.repassword) {
    errors.repassword = "passwords doesn't match";
  }

  return errors;
};

Signup.propTypes = propTypes;
Signup = reduxForm({ form: 'signup', validate })(Signup);

export default Signup;
