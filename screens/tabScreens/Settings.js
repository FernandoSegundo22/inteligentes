import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Settings(){
    return(
        <SafeAreaView>
            <View>
            <Text>Settings Text</Text>
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