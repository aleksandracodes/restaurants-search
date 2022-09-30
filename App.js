import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";

// install --> npm install react-navigation react-navigation-stack
const navigator = createStackNavigator({
  Home: HomeScreen
  }, 
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'BuisnessSearch'
  }
})

export default createAppContainer(navigator)