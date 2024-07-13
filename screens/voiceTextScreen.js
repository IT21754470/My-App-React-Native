import react from 'react'
import {View,Text,TouchableOpacity,TextInput,Alert} from 'react-native'
import Voice from '@react-native-community/voice';

const VoiceToTextScreen=()=>{

    const [started,setStarted]=useState(false);
    const[result,setResult]=useState('')


    useEffect(()=>{
        Voice.onSpeechStart = () => setStarted(true);
        Voice.onSpeechEnd = () => setStarted(false);
        Voice.onSpeechResults = (event) => {
          setResult(event.value[0]);
        };
        Voice.onSpeechError = (event) => {
          Alert.alert('Speech recognition error', event.error.message);
        };
    
        return () => {
          Voice.destroy().then(Voice.removeAllListeners);
        };
      }, []);
    
      const startListening = async () => {
        try {
          await Voice.start('en-US');
        } catch (error) {
          Alert.alert('Error starting speech recognition', error.message);
        }
      };
    
      const stopListening = async () => {
        try {
          await Voice.stop();
        } catch (error) {
          Alert.alert('Error stopping speech recognition', error.message);
        }
      };
    
      return (
        <View>
          <Text>Voice-to-Text Example</Text>
          <TextInput value={result} placeholder="Speak something" editable={false} />
          <TouchableOpacity onPress={startListening}>
            <Text>Start Listening</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopListening}>
            <Text>Stop Listening</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    export default VoiceToTextScreen;
    