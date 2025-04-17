import { Link, useRouter, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Home',
                }}
            />
            <StatusBar style="auto" />
            <Link href="/details">
                <Text>Go to details</Text>
            </Link>
            <Pressable onPress={() => router.push('/user/bacon')}>
                <Text>View user</Text>
            </Pressable>
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
});