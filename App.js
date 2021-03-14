import React from 'react';
import { StyleSheet, View} from 'react-native';
import StyleSheetApproachList from './src/StyleSheetApproachList'
import TailwindApproachList from './src/TailwindApproachList'

export default function App() {
  return (
    <View style={styles.container}>
      <StyleSheetApproachList />
      <TailwindApproachList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
});
