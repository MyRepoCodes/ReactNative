/* eslint-disable import/prefer-default-export */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

const Item = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = {
  container: {
    paddingBottom: 12,
  },
};

Item.defaultProps = defaultProps;
Item.propTypes = propTypes;

export { Item };
