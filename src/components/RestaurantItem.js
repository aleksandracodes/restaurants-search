import { StyleSheet, Image, Text, View } from 'react-native'
import { elevation } from '../common/styles'

export default function RestaurantItem({restaurant}) {
    return (
        <View style={[styles.elevation, styles.container]}>
            <Image style={styles.image} source={{uri: restaurant.image_url}} />
            <View>
                <Text>{restaurant.name}</Text>
                <View>
                    <Text>{restaurant.rating}</Text>
                    <Text>{restaurant.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: 'white',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 400,
        marginLeft: 10,
      },
})