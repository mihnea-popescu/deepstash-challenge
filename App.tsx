import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import SearchPeopleScreen from './src/screens/SearchPeopleScreen';

export default function App() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView className='w-full h-full'>
        <SearchPeopleScreen/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}