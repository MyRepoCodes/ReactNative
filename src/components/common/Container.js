/* eslint-disable import/prefer-default-export */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = props => (
  <View style={[styles.container]}>
    {props.children}
  </View>
);

const styles = {
  container: {
    flex:1,
    backgroundColor: '#0071bc',
    padding:20,
    margin:0,
  },
};

Container.propTypes = propTypes;

export { Container };
