import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

class UberOption extends React.Component {
  constructor(){
    super();
    this.state = {expanded: false}
  }
  render() {
    if (this.state.expanded) {
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('http://uber.com')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/uber.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: false})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Hide Details</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Uber is a peer-to-peer ridesharing service offering fast transportion. Fares to downtown typically cost $14-18. First time? Click the banner above to receive a free ride credit.</Text>
        </View>
      )
    }
    else{
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('http://uber.com')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/uber.jpg')}
            />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: true})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Learn More</Text>
          </TouchableOpacity>

        </View>
      )
    }

  }
}

class MetroOption extends React.Component {
  constructor(){
    super();
    this.state = {expanded: false}
  }
  render() {
    if (this.state.expanded) {
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.capmetro.org/')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/metro.gif')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: false})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Hide Details</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Experience Austin's acclaimed public transportation system. Ride once for $1.25 or buy a day pass for $2.50. Click the banner above for more information.</Text>
        </View>
      )
    }
    else{
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.capmetro.org/')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/metro.gif')}
            />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: true})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Learn More</Text>
          </TouchableOpacity>

        </View>
      )
    }

  }
}

class BirdOption extends React.Component {
  constructor(){
    super();
    this.state = {expanded: false}
  }
  render() {
    if (this.state.expanded) {
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.bird.co/')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/bird2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: false})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Hide Details</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Bird is a revolutionary electric scooter sharing startup. Take a joy ride on one for just a few dollars.</Text>
        </View>
      )
    }
    else{
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.bird.co/')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/bird2.png')}
            />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: true})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Learn More</Text>
          </TouchableOpacity>

        </View>
      )
    }

  }
}

class ChariotOption extends React.Component {
  constructor(){
    super();
    this.state = {expanded: false}
  }
  render() {
    if (this.state.expanded) {
      return(
        <View style = {styles.option}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.lyft.com')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/lyft.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: false})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Hide Details</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Lyft is a peer-to-peer ridesharing service offering fast transportion. Fares to downtown typically cost $13-17. First time? Click the banner above to receive a free ride credit.</Text>
        </View>
      )
    }
    else{
      return(
        <View style = {styles.option}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.lyft.com')}>
            <Image
              style={{height: 120, width: 350}}
              source={require('../assets/images/lyft.jpg')}
            />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({expanded: true})}>
          <Text style={{fontSize: 24, textDecorationLine: 'underline', textAlign: 'center'}}>Learn More</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <UberOption/>
        </View>
        <View style={styles.welcomeContainer}>
          <MetroOption/>
        </View>
        <View style={styles.welcomeContainer}>
          <BirdOption/>
        </View>
        <View style={styles.welcomeContainer}>
          <ChariotOption/>
        </View>
        </ScrollView>


      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const uberButton = (
        <Text onPress={this._handleUberPress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      const metroButton = (
        <Text onPress={this._handleMetroPress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      const birdButton = (
        <Text onPress={this._handleBirdPress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleUberPress = () => {
    WebBrowser.openBrowserAsync('https://www.uber.com');
  };
  _handleMetroPress = () => {
    WebBrowser.openBrowserAsync('https://www.capmetro.org');
  };
  _handleBirdPress = () => {
    WebBrowser.openBrowserAsync('https://www.bird.co');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  option: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth:3
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
