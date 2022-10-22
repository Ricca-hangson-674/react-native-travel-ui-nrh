import TourDetailScreen from 'src/screens/TourDetailScreen';
import TOURS from './src/config/TOURS';

// const App = () => <HomeScreen />;
const App = () => <TourDetailScreen tour={TOURS[0]} />;

export default App;
