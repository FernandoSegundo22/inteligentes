import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
 
export default function Feed(){

    
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts();
    }, []);
    

    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";
    
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                //console.log(data);
                setProducts(data);
            })
    };


    return(
        <SafeAreaView>
            <View>
            <FlatList 
                data={products} 
                renderItem={({ item }) => (
                    <View>
                        <Image 
                            style={styles.image}
                            source={{uri: item.image}}>
                        </Image>

                        <Text>{item.title}</Text>
                        </View>
                    )}>
                    </FlatList>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingTop: 10,
        marginTop: 50
    },

    texto:{
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        paddingTop:20,
    },

    image:
    {
        width:200,
        height:200,
    },
});