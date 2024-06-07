import { SafeAreaView, Text, View, StatusBar, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import Product from '../../components/Product';


const DetailsScreen = () => {

    const {
        params: {product},
    } = useRoute();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}></StatusBar>
            <Text>Details Screen</Text>
            <Product product={product}></Product>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default DetailsScreen;