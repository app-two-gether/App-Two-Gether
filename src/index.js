import React from 'react'
import {View, Text, StatusBar} from 'react-native'
import Routes from './routes'

console.disableYellowBox=true
 
export default function App(){
    return(
        <>  
            <StatusBar backgroundColor="#ff4500"/>
            <Routes/>
        </>
    )
}