import { StyleSheet, Text, View } from 'react-native';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

//Screens 
import Login from './screens/Login';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Products from './screens/Products';
import Categories from './screens/Categories';
import Detail from './screens/Detail';
import { MyColors } from './src/theme/AppTheme';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={
            {
              headerShown: false,
            }
          }
          initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN"
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            title: "Splash"
          }}
        />
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
