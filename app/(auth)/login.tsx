import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LogIn() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Login to access all</Text>
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000'
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight:400
    }
})