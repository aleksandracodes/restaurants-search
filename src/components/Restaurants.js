import { StyleSheet, Text, View } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';

export default function Restaurants() {
    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    searchRestaurants('Dessert')  // throws an error of an infinite look at the moment

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        flex: 1
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        height: 50
    }
})