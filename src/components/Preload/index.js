import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import firebase from '../../services/firebaseConnection'


export default function Preload({navigation}){

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                navigation.navigate('Isaque', {uid: user.uid})
            }else{
                navigation.navigate({ routeName: 'Home'})
            }
        })
    },[])

    return(
        <View>
           
        </View>
    )
}