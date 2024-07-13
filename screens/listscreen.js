import React from 'react'
import { View, Text ,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Voice from '@react-native-community/voice';


export default function ListScreen() {
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    const navigation = useNavigation();

    const[characters,setCharacters]=useState([]);
    const [isListening, setIsListening] = useState(false);
    const [voiceText, setVoiceText] = useState('');

    useEffect(()=>{
       axios.get("https://thronesapi.com/api/v2/Characters")
       .then(response=>{
        setCharacters(response.data);
        setLoading(false);
       })
       .catch(error=>{
         setError('failed to fetch data');
         setLoading(false);``
       });
       Voice.onSpeechStart = () => setIsListening(true);
        Voice.onSpeechEnd = () => setIsListening(false);
        Voice.onSpeechResults = (e) => setVoiceText(e.value[0]); // Set the first result of the voice input
        Voice.onSpeechRecognized = () => console.log('Speech recognized');

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    },[])
    const startListening = async () => {
      try {
          await Voice.start('en-US');
      } catch (error) {
          console.error('Voice recognition failed:', error);
      }
  };

    const renderItem=({item})=>(
       

        <View style={styles.card}>

            <Image source={{uri:item.imageUrl}} style={styles.image}/>
            <View style={styles.textContainer}>
                </View>
               

                <Text style={styles.firstname}>{item.firstName}</Text>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('details',{character:item})}

                    >
                        <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
                
              
            </View>
    );
    if(loading){
        
        return <ActivityIndicator size="large" color="#00ff00" 
        />
    }

    if(error){
        return <Text style={styles.error}>error</Text>
    }
  
    return (
       <View style={styles.container}>
        <Text style={styles.pageTitle}>Characters</Text>
            <TouchableOpacity style={styles.voiceButton} onPress={startListening}>
                <Ionicons name={isListening ? 'mic' : 'mic-off'} size={24} color="#ECCC77" />
            </TouchableOpacity>
  <TouchableOpacity
                style={styles.logoutIcon}
                onPress={() => navigation.push('logout')}
            >
                <Ionicons name="log-out-outline" size={24} color="#ECCC77" />
            </TouchableOpacity>
            <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.container}
        />
        </View>



      );

    
    }
    
    const styles = StyleSheet.create({
        container: {
          
          padding: 10,
          backgroundColor: 'black',
        },
        card: {
            top: 60,
          backgroundColor:'#383834',
          borderRadius: 10,
          marginBottom: 20,
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
        },
        image: {
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10,
        },
        textContainer: {
          flex: 1,
        },
        firstname: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          right: 20,
        },
        title: {
          color: 'white',
          fontSize: 14,
        },
        house: {
          color: 'gray',
          fontSize: 12,
        },
        button: {
          backgroundColor: '#ECCC77',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        },
        buttonText: {
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
        },
        loader: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#000',
        },
        error: {
          color: 'red',
          textAlign: 'center',
          marginTop: 20,
        },
          pageTitle: {

            color: '#FFFFFF',
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
           left:90,
          },
          logoutIcon: {
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1,
        },
        voiceButton: {
          position: 'absolute',
          top: 13,
          left: 20,
          backgroundColor: '#383834',
          padding: 10,
          borderRadius: 30,
      },
        
      });

    