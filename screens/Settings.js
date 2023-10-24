import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { getDatabase, ref, push, onValue, update } from 'firebase/database';
import app from '../configure/firebase';

export default function Settings() {

      const [name, setName] = useState('asdasdsadas');
      const [price, setPrice] = useState('11111');
      const [description, setDecription] = useState('This is new description');
    
   const createTableAndAddItem = () => {
    console.log("yes");
     const db = getDatabase(app);
     const tableRef = ref(db, 'categories'); 
 
     // Define the data for the new item
     const newItem = {
       name: name,
       price: price,
       description: description,
     };
 
     update(tableRef, { [Date.now()]: newItem })
       .then(() => {
         console.log('New item added to the database');
       })
       .catch((error) => {
         console.error('Error adding new item to the database:', error);
       });
   };
 


    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <TextInput style={styles.input} placeholder='Name' onChangeText={setName} value={name} />
                <TextInput style={styles.input} placeholder='Comment' onChangeText={setDecription} value={description} />
                <TextInput style={styles.input} placeholder='ImageURL' />

                <TouchableOpacity style={styles.btn} onPress={()=>createTableAndAddItem()} >
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    mainBox: {
        marginTop: 23,

    },
    input: {
        width: '90%',
        alignSelf: 'center',
        borderColor:'#ccc',
        borderWidth: 0.5,
        marginTop: 12,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    btn:{
        width:'90%',
        borderColor:'#ccc',
        height:50,
        backgroundColor:'blue',
        alignSelf: 'center',
        borderRadius:10,
        marginTop:13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:
        {fontSize:18,color:"#fff",fontWeight:'600'}
    
})