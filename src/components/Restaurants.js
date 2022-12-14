import { StyleSheet, FlatList, Text, View, ActivityIndicator } from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import { useEffect } from 'react';
import RestaurantItem from './RestaurantItem';

export default function Restaurants({term}) {
    const [{data, loading, error}, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    // display loading spinner if the results are loading
    if(loading) {
        return <ActivityIndicator size='large' marginVertical={30} />
    }

    // display an error message if the error occurred
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{error}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList 
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({item}) => (
                    <RestaurantItem restaurant={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    }
})