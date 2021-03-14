import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const ListItemTW = ({
  uri,
  selected = false,
  text=""
}) => (
  <View style={tw.style(
    'h-64 w-40 bg-blue-500 rounded-xl p-4 m-1 items-center justify-center shadow-lg',
    !selected && 'bg-white'
  )}>
    <View style={tw`w-28 h-28 rounded-full bg-indigo-50`}>
      <Image
        style={tw`w-28 h-28 rounded-full`}
        source={ uri }
      />
    </View>
    <Text style={tw.style(
      'text-white text-lg font-bold my-4',
      !selected && 'text-black'
    )}>
      { text }
    </Text>
    <TouchableOpacity
      style={
        tw`h-10 w-full bg-white rounded-full items-center justify-center border border-blue-500`
      }
    >
      <Text style={tw`text-lg text-blue-500 font-bold`}>
        Details
      </Text>
    </TouchableOpacity>
  </View>
)
