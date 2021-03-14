import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItemTW } from './ListItemTW'

const TailwindApproachList = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainerStyle}
    showsHorizontalScrollIndicator={false}
    horizontal>
    <ListItemTW
      uri={require('../assets/Humaaans1.png')}
      text='Studio'
      selected
    />
    <ListItemTW
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

export default TailwindApproachList
