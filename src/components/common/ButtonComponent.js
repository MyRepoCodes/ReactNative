import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
 
const button = (props) => {   
    return (
        <TouchableOpacity 
            style={styles.button}>
           <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
    );    
}
 
const styles = StyleSheet.create({
    button: {
        fontFamily:'arial',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        alignSelf:'stretch',
        backgroundColor: '#5bc0de',
        marginLeft:30,
        marginRight:30,
        borderRadius:4,
    },
    label : {
        fontSize: 16,
        fontWeight:'bold',
        color: '#fff'
    }
});
 
export default button;