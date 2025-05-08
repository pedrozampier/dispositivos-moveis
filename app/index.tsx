import { useRouter, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import Ball from '../components/Ball';
import { useEffect, useState } from 'react';

export default function App() {

    const router = useRouter();
    const [matriz, setMatriz] = useState<number[]>([]);
    const [sorteadas, setSorteadas] = useState<number[]>([]);

    

    useEffect(() => {
        for (let i = 0; i < 12; i++) {
            matriz.push(Math.floor(Math.random() * 60) + 1);
        }
    }, [])

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Sollectiom',
                }}
            />
            <StatusBar style="auto" />

            <FlatList style={styles.list} data={matriz} numColumns={4} renderItem={({ item }) => {
                return (
                    <Ball number={item} />
                )
            }}/>

            <Button title='Sortear' onPress={() => {
                if (matriz.length > 0) {
                    const randomIndex = Math.floor(Math.random() * matriz.length);
                    const selectedNumber = matriz[randomIndex];
                    
                    setMatriz(matriz.filter((_, index) => index !== randomIndex));
                    setSorteadas([...sorteadas, selectedNumber]);
                }
            }} />

            <FlatList style={styles.list} data={sorteadas} numColumns={4} renderItem={({ item }) => {
                return (
                    <Ball number={item} />
                )
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 20,
    }
});