/**
 * React Native Starter: NavigatorIOS
 * https://github.com/joshbuchea/react-native-starter-navigatorios
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

class StarterNavigatorIOS extends React.Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.navContainer}
        initialRoute={{
          component: FirstScreen,
          title: 'StarterNavigatorIOS',
          backButtonTitle: 'Back'
        }}/>
    );
  }

};

/**
 * 1st Screen
 */
class FirstScreen extends React.Component {

  constructor(props) {
    super(props);
    this.showSecondScreen = this.showSecondScreen.bind(this);
  }

  showSecondScreen(entry) {
    this.props.navigator.push({
      title: '2nd Screen',
      component: SecondScreen,
      passProps: {
        entry: entry
      }
    });
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='#B5B5B5'
          onPress={(this.showSecondScreen)}>
          <Text style={styles.title}>
            Show Second Screen
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
 
};

/**
 * 2nd Screen
 */
class SecondScreen extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi, I am the 2nd Screen/Scene/Page/View/Whatever</Text>
      </View>
    );
  }
 
};

var styles = StyleSheet.create({
  navContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    alignItems: 'stretch'
  },
});

AppRegistry.registerComponent('StarterNavigatorIOS', () => StarterNavigatorIOS);
