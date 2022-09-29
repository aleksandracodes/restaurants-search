import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'

export default function Search() {
    return (
        <View style={[styles.container, elevation]}>
            <FontAwesome 
                name='search'
                size={25}
            />
            <TextInput
                style={styles.input}
                placeholder='Restaurants, food'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 50
    },
    elevation,
    input: {
        fontSize: 20,
        marginLeft: 10
    }
})