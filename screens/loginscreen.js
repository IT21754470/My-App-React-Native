import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import React, { useState,useContext } from 'react';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AuthContext from './auth';


export default function LoginScreen(){

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const { setUser } = useContext(AuthContext);
    const navigation = useNavigation();
   
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            Alert.alert('Login successful', `Welcome back, ${user.email}!`);
            navigation.push('list', { user: user }); 
          })
          .catch((error) => {
            Alert.alert('Login failed', error.message);
          });
      };
    
  return (
    <View className='bg-black h-full w-full'>

        <View classNme="h-full w-full flex justify-around pt-29px pb-30">

            <View className='flex items-center'>
        <Text className="text-white tracking-wider text-3xl pt-[124px] pb-[89px] font-bold">My App</Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
            <View className="bg-[#383834] p-5 rounded-xl w-full ">
            <TextInput className='text-white' placeholder='Email'
             onChangeText={setEmail}
            placeholderTextColor={'gray'}/>
            </View>
            
            <View className="bg-[#383834] p-5 rounded-xl w-full  ">
            <TextInput className='text-white' placeholder='password'
            onChangeText={setPassword} 
            placeholderTextColor={'gray'}
            secureTextEntry={!passwordVisible}
            />
 </View>

            <TouchableOpacity className='left-[152px] bottom-14 ' onPress={()=>setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
       

            <View>
        <Text className="text-white left-[120px] bottom-12">Forgot Password?</Text>
        </View>

        <View className="w-full flex items-center gap-10 bottom-12">
                        <TouchableOpacity  
                            className="w-full bg-[#ECCC77] p-3 rounded-xl mb-3 flex items-center"
                            onPress={handleLogin}
                        >
                            <Text className="text-[#ECCC77] text-xl text-black font-bold">Sign In</Text>
                        </TouchableOpacity>
                    </View>


             <View>
                <View className='flex-row justify-center top-36'>
        <Text className="text-white ">Don't have an account? 
            </Text>
            <TouchableOpacity onPress={()=> navigation.push('signup')}>
                <Text className="text-[#ECCC77] underline">  Sign Up</Text>
            </TouchableOpacity>

           
           
      
             </View>
             </View>

        </View>
        </View>
    </View>
  )
}