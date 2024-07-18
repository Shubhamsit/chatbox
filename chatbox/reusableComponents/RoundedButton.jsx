import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const RoundedButton = ({ btnObj}) => {
  const { bgColor, text, width, height, logo,textColor } = btnObj;
 
  return (
    <View style={[styles.mainContainer, {width:width,height:height}]}>




      <TouchableOpacity onPress={() => { }} style={[styles.btnContainer,{backgroundColor:bgColor}]}>
        <View>
          <Text style={[styles.btnText,{color:textColor}]}>{logo} {text}</Text>
        </View>
      </TouchableOpacity>


    </View>
  )
}

export default RoundedButton

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
 


  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
  },
  btnContainer: {
    padding: 10,
    borderRadius: 17,
    width: '100%',
    height: '100%',
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',


  }
})