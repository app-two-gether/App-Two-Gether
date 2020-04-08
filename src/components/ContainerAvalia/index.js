import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function ContainerAvalia({data}){
    return(
        <View>
            
        <View style={styles.container1}>
    <Text style={styles.subTxt}>{data.empresa}</Text>
            <Text style={styles.subTxt}>{data.titulo}</Text>
            <Text style={styles.subTxt}>{data.texto}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    head:{
        backgroundColor:'#ff4500',
        marginBottom:'10%'
    },
    txt:{
        fontSize:30,
        fontFamily:'verdana',
        textAlign:'center',
        color:'#fff',
        padding:5
    },
    container1:{
        width:'100%',
        borderWidth:3,
        borderTopColor:'#ff45ff',
        borderBottomColor:'#008000',
        borderColor:'#ff4500',
        borderRadius:10,
        marginBottom:'5%'
    },
    subTxt:{
        fontSize:18,
        padding:15,
        borderBottomWidth:1,
    }
})