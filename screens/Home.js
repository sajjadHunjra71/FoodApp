import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../configure/firebase';
import moment from 'moment';

export default function Home() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const itemDate = new Date('2023-10-20');



    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, 'categories'); 

            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();

                if (data) {
                    const dataArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
                    setInfo(dataArray);
                }

                setLoading(false);
            });
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        const currentDate = moment(); 
        const formattedDate = currentDate.format('YYYY-MM-DD');
        return (
            <View style={styles.mainBox}>
                <View style={styles.imgBox}>
                    <Image source={require('../assets/img.png')} style={styles.imgStyle} />
                </View>
                <View style={styles.layer2Box}>
                    <View style={styles.avatarBox}></View>
                    <View>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.title}>{formattedDate}</Text>
                    </View>
                </View>

                <View style={styles.description}>
                    <Text numberOfLines={3} style={{ fontSize: 16, textAlign: 'justify' }}>{item.description}</Text>
                </View>
            </View>
        );
    };

    if (loading) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <FlatList
                    data={info}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    mainBox: {
        width: '100%', height: 310, backgroundColor: '#fff', marginTop: 10, borderRadius: 10
    },
    imgBox: { width: '95%', height: '54%', backgroundColor: 'red', alignSelf: 'center', marginTop: 10, borderRadius: 10 },
    imgStyle: { resizeMode: 'cover', width: '100%', height: '100%', borderRadius: 10 },
    layer2Box:
        { width: '95%', alignSelf: 'center', flexDirection: 'row', height: 60, marginTop: 5, paddingVertical: 10 }
    ,
    avatarBox: { width: 50, height: 50, backgroundColor: 'green', borderRadius: 10, marginHorizontal: 5, alignSelf: 'center', }
    ,
    title: { fontSize: 20, fontWeight: '600' }
    ,
    description: { width: '95%', alignSelf: 'center', flexDirection: 'row', height: 60, }

});
