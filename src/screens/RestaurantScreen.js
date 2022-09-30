import { View, Text } from 'react-native';

export default function RestaurantScreen({navigation}) {
    const id = navigation.getParam('id')

    return (
        <View>
            <Text>Hello Restaurant Screen</Text>
            <Text>{id}</Text>
        </View>
    )
}