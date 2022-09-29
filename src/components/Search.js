import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Search() {
    return (
        <View style={styles.container}>
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
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: .1,
        padding: 15,
        borderRadius: 50
    },
    input: {
        fontSize: 20,
        marginLeft: 10
    }
})