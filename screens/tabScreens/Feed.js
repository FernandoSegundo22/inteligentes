import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Feed(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
            <Text>Feed Text</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingTop: 10,
        marginTop: 50
    }
});