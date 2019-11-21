'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import QRCodeScanner from 'react-native-qrcode-scanner';
import History from './History';

class ScanScreen extends React.Component {
  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <View style={styles.position}>
        <Text style={styles.text}>Page 1</Text>
        <QRCodeScanner
          onRead={this.onSuccess}
          topContent={null}
        />
        <Button
          title='History'
          onPress={() => Actions.History({})} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  text: {
    position: 'absolute',
    width: 100,
    height: 0,
    top: 0,
    right: 0,
    bottom: 2000,
    left: 0,
  },
  position: {
    position: 'absolute',
    width: 100,
    height: 50,
    top: 125,
    right: 0,
    bottom: 20,
    left: 0,
  },
});


export default ScanScreen;