import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AddProd } from './src/screens/AddProd';
import {Home} from './src/screens/Home';
import Actions from "./src/screens/Actions";

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
        <Stack.Screen name="Actions" component={Actions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

