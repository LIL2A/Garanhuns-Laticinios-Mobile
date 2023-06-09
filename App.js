import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AddProd } from './src/screens/AddProd';
import {Home} from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddProd" component={AddProd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

