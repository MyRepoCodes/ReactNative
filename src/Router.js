import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Signin from './containers/auth/Signin';
import Signup from './containers/auth/Signup';
import Dashboard from './components/main/Dashboard';
import requireAuth from './containers/auth/requireAuth';
import requireNotAuth from './containers/auth/requireNotAuth';
import Home from './components/home/Home';

const RouterComponent = () => (
  <Router 
  	sceneStyle={{ paddingTop: 55, backgroundColor: '#edecec' }}
  	navigationBarStyle={styles.navigationBarStyle}
    titleStyle={{ color: '#4d4d4d' }}>
    <Scene key="auth">
      <Scene key="dashboard" component={requireNotAuth(Dashboard)} title="August 6, 2017" />
      <Scene key="signin" component={requireNotAuth(Signin)} title="Please Sign in" />
      <Scene key="signup" component={requireNotAuth(Signup)} title="Please Sign up" />
    </Scene>
  </Router>
);

const styles = {
  navigationBarStyle: {
    backgroundColor: '#fff',
    borderBottomWidth:0,
  },
};

export default RouterComponent;