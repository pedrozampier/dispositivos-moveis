import { Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function Details() {

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Details',
                }}
            />
            <Text>ZAMPA É O CARA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
