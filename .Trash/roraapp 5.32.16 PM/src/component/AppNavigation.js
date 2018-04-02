import React from 'react';
import { StackNavigator } from 'react-navigation';
import Welcome from './Welcome/Welcome'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import GridPage from './GridPage/GridPage'
import Main from './Screen8/Main'
import RootView from './TabView/RootView';
import Top200 from './Screen22/Top200';
import Room from './Screen29/Room';
import ChatDemo from './ChatScreen/ChatDemo';
import Subscribers from './Screen46/Subscribers';
import Invites from './InviteScreen/Invites'
import Profile from './Screen43/Profile';
import Maxwell from './Screen43/Maxwell';
import Search from './Screen37/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Screen14 from './Screen14/Screen14'
import {
  Button,
} from 'react-native';

const AppNavigation = StackNavigator({
  First: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      header: true
    }),
  },
  Second: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
      header: false,
    }
  },
  Third: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: false,
    }
  },
  Screen14: {
    screen: Screen14,
    navigationOptions: {
      title: 'Screen14',
      header: false,
    }
  },
  Fourth: {
    screen: GridPage,
    navigationOptions: {
      title: 'GridPage',
      header: false,
    }
  },
  Fifth: {
    screen: Invites,
    navigationOptions: {
      title: 'Invites',
      header: false,
    }
  },
  RootView: {
    screen: RootView,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#FD5A4C',
        borderBottomWidth: 1
      },
      headerLeft: null,
      headerLeft: <Icon name='search' color='#000' size={40} style={{ marginLeft: 15 }} onPress={() => { navigation.navigate('Search'); }} />,
      headerRight: <EvilIcons name='user' color='#000' size={40} style={{ marginRight: 15 }} onPress={() => { navigation.navigate('Maxwell'); }} />
      //  headerRight:  <Button title="Menu" onPress={()=>{ navigation.navigate('Maxwell'); }} />
    }),
  },
  ChatDemo: {
    screen: ChatDemo,
    navigationOptions: {
      title: '',
      header: false,
    }
  },
  ScreenEight: {
    screen: Main,
    navigationOptions: {
      title: 'Main',
      header: false,
    }
  },
  Top200: {
    screen: Top200,
    navigationOptions: {
      title: 'Top200',
      header: false,
    }
  },
  Subscribers: {
    screen: Subscribers,
    navigationOptions: {
      title: 'Subscribers',
      header: false,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      header: false,
    }
  },
  Maxwell: {
    screen: Maxwell,
    navigationOptions: {
      title: 'Maxwell',
      header: false,
    }
  }, Top200: {
    screen: Top200,
    navigationOptions: {
      title: 'Top200',
      header: false,
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
      header: false,
    }
  },
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderWidth: 0 // removes the border on the bottom
      },
      headerLeft: null,
      headerLeft: <SimpleLineIcons
        name='arrow-left'
        size={26}
        color='white'
        style={{ marginTop: 0, marginLeft: 20 }}
      />
    }),
  }
}, {
    // see next line
    checkMethod() {
      alert('called');
    }

  })

export default AppNavigation
