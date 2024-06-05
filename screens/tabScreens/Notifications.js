import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Notifications(){
    return(
        <SafeAreaView>
            <View>
            <Text>Notifications Text</Text>
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