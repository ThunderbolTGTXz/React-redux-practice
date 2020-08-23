import React from 'react';
import {  View,Text ,Button} from "react-native";

const Box1 = props => {
    return(
        <View style={{...props.style, justifyContent: 'center',}}>
            <Text style={{color:'#414042', fontSize:30,alignSelf: 'center',}}>Box1</Text>
        </View>
       
    )
}

export default Box1;