import { AppNavigator } from './navigation/app-navigator';
import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold} from '@expo-google-fonts/open-sans';



export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold
  });

  if (!fontsLoaded) {
      return null;
  }
  return (
    <AppNavigator />
  );
}