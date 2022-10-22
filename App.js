import HomeScreen from 'src/screens/HomeScreen';
import TourDetailScreen from 'src/screens/TourDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const App = () => <HomeScreen />;
// const App = () => <TourDetailScreen tour={TOURS[0]} />;

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TourDetail" component={TourDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
