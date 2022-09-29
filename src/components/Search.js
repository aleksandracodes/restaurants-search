import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'

export default function Search({setTerm}) {
    const [input, setInput] = useState('')

    const handleEndEditing = () => {
        if(!input) return
        setTerm(input)
        setInput('')  // clear input value - only works with two-way binding -> state with value (value={input})
    }

    return (
        <View style={[styles.container, elevation]}>
            <FontAwesome 
                name='search'
                size={25}
            />
            <TextInput
                style={styles.input}
                placeholder='Restaurants, food'
                value={input}
                // availability to change text to update our state
                onChangeText={(text) => {
                    setInput(text);
                }}
                // call 'setTerm' function when we press Enter
                onEndEditing={handleEndEditing}
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