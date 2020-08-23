import React from 'react';
import {  View,Text } from "react-native";

const Box2 = props => {
    return(
        <View style={{...props.style, justifyContent: 'center',}}>
           <Text style={{color:'#414042', fontSize:30,alignSelf: 'center',}}>Box2</Text>
        </View>
       
    )
}

export default Box2;