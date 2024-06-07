import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 


export default function Feed(){

    const navigation = useNavigation();

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


    const handleItemPress = (item) => {
        navigation.navigate('Details', {product: item});
    }


    return(
        <SafeAreaView>
            <View>
            <FlatList 
                data={products} 
                renderItem={({ item }) => (
                    <View>

                        <TouchableOpacity onPress={() => handleItemPress(item)}>
                            <Image 
                                style={styles.image}
                                source={{uri: item.image}}>
                            </Image>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>

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