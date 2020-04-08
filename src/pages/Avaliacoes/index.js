import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import firebase from '../../services/firebaseConnection'
import Icon from 'react-native-vector-icons/AntDesign'
import ContainerAvalia from '../../components/ContainerAvalia'

export default function Avaliacoes({navigation}){
    const [avaliacao, setAvaliacao] = useState([])
    const [valor, setValor] = useState();
    const uid = navigation.state.params.uid
        useEffect(()=>{
            async function loadingList(){
                await firebase.database().ref('avaliacoes').on('value',  (snapshot)=>{
                    setAvaliacao([]);
                    snapshot.forEach((childItem)=>{
                        let list = {
                            key: childItem.key,
                            empresa: childItem.val().empresa,
                            titulo: childItem.val().titulo,
                            texto: childItem.val().texto
                        }
                        
                        setAvaliacao(oldArray =>[...oldArray, list])
                    })
                })
            }
            loadingList();
        }, []);
    return(
    <>
    <ScrollView style={styles.mainContainer}>
            <View style={styles.head}>
    <Text style={styles.txt}>Explore Avaliaçoes</Text>
            </View>
        <FlatList
            data={avaliacao} keyExtrator={item => item.key }
            renderItem={ ({item})=> (<ContainerAvalia data={item}/>)}
        />

        
    </ScrollView>
    </>
    )
}

Avaliacoes.navigationOptions = {
    tabBarIcon: (tintColor) => (
        <Icon name="checkcircleo" size={22} color={tintColor}/>
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
        borderRadius:10
    },
    subTxt:{
        fontSize:18,
        padding:15,
        borderBottomWidth:1,
    }
})