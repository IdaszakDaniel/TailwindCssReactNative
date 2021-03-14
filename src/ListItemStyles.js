import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ListItem = ({
  uri,
  selected = false,
  text=""
}) => {
  return (
    <View style={[styles2.container, { ...(!selected && { backgroundColor: '#FFFFFF'})}]}>
      <View style={styles2.logoBackground}>
        <Image
          style={styles2.logo}
          source={ uri }
        />
      </View>
      <Text style={[styles2.text, { ...(!selected && { color: 'black'})}]}>{ text }</Text>
      <TouchableOpacity style={styles2.button}>
        <Text style={styles2.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles2 = StyleSheet.create({
  container: {
    height: 256,
    width: 160,
    backgroundColor: 'rgba(59,130,246,1)',
    borderRadius: 12,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  logoBackground:{
    width: 112,
    height: 112,
    borderRadius: 55,
    backgroundColor: '#E4F0FE'
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 55
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  button: {
    height: 40,
    width:'100%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,1)'
  },
  buttonText: {
    color: 'rgba(59,130,246,1)',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default ListItem
