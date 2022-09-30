import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

// install --> npm install react-navigation react-navigation-stack
const navigator = createStackNavigator({
  Home: HomeScreen,
  Restaurant: RestaurantScreen
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'BuisnessSearch'
  }
})

export default createAppContainer(navigator)