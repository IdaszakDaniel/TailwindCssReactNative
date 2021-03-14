import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ListItemStyles from './ListItemStyles';

const StyleSheetApproachList = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainerStyle}
    showsHorizontalScrollIndicator={false}
    horizontal>
    <ListItemStyles
      uri={require('../assets/Humaaans1.png')}
      text='Studio'
      selected
    />
    <ListItemStyles
      uri={require('../assets/Humaaans2.png')}
      text='Outdoor'
    />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#FBFCFF'
  },
  contentContainerStyle: {
    height: 300,
    width: 400
  }
});

export default StyleSheetApproachList
