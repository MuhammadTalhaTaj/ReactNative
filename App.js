import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import { FontAwesome } from "@expo/vector-icons"

import Login from './screens/login_screen';
import SignUp from './screens/signup_screen';
import Home from './screens/home_screen';
import Details from './screens/details_screen';
import EnrollmentHistoryScreen from './screens/enrollmentHistory';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen options={{
        headerShown: false
      }} name='Home' component={Home} />
      <BottomTab.Screen options={{
        headerShown: false, 
      }} name='Details' component={Details} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signup' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tab' component={Tab} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={SignUp} />
        <Stack.Screen options={({ route }) => ({ title: route.params.name })} name='enrollmentScreen' component={EnrollmentHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


