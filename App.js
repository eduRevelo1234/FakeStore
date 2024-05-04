import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//Screens 
import Home from './screens/Home';
import Products from './screens/Products';
import Categories from './screens/Categories';
import Detail from './screens/Detail';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio"
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: "Productos"
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: "Categorias"
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Detalle"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
