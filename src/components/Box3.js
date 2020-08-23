import React from 'react';
import {  View,Text } from "react-native";

const Box3 = props => {
    return(
        <View style={{...props.style, justifyContent: 'center',}}>
           <Text style={{color:'#414042', fontSize:30,alignSelf: 'center',}}>Box3</Text>
        </View>
       
    )
}

export default Box3;