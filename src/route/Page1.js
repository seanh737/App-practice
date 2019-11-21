import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default () => (
  <View style={styles.Button}>
    <Text>Hello from page1</Text>
    <Button
      title='Go to Page 2'
      onPress={() => Actions.page2({})} />
    <Button
      title='Go to Page 3'
      onPress={() => Actions.page3({})} />
    <Button
      title='Go to Scan'
      onPress={() => Actions.Scan({})} />
  </View>
);


const styles = StyleSheet.create({
  Button: {
    position: 'absolute',
    width:300,
    height:50,
    top:20,
    right:0,
    bottom:20,
    left:60,
  },
  row: {
    flex: 1,
  }
});