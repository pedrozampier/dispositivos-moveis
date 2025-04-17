import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Users() {
    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container} >
            <Stack.Screen
                options={{
                    title: 'User',
                }}
            />
            <Text>User ID: {id}</Text>
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