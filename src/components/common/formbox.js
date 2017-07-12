/* eslint-disable import/prefer-default-export */
import React, { PropTypes } from 'react';
import { Text, View,StyleSheet } from 'react-native';

const Formbox = (props) => {
    return (
       <View style={styles.formbox}>

       </View>
    );
}

const styles = StyleSheet.create({
    formbox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor:'red',
    },
});

export { Formbox };
