import { Text, View, Image, StyleSheet } from "react-native";

const Product = ({product}) => {
    return(
        <View>
            <Text style={styles.title}>
                {product.style}
            </Text>
            <Image style={styles.image} source={{uri: product.image}} >
            </Image>
            <View>
                <Text>
                    Desc: {product.description}
                </Text>
                <Text>
                    Price: {product.price}
                </Text>
            </View>
        </View>
    )
}

export default Product;

const styles = StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold',
    },

    image:{
        width:300,
        height:300
    }
})