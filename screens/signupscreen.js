import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import React, { useState } from 'react';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {CheckBox, checkBox} from 'react-native-elements'; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebaseConfig';
export default function SignUpScreen(){


    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const[checkboxes,setCheckboxes]=React.useState({
      lowercase:false,
      uppercase:false,
      number:false,
      minLength:false,

    });

    const validatePassword=(password)=>{
      setCheckboxes({
        lowercase:/(?=.*[a-z])/.test(password),
        uppercase:/(?=.*[A-Z])/.test(password),
        number:/(?=.*[0-9])/.test(password),
        minLength:/.{8,}/.test(password),
      })
    }

    const handleSignUp = () => {
      if (password !== confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name });
          Alert.alert('Sign up successful', `Welcome, ${user.email}!`);
          navigation.push('login'); 
        })
        .catch((error) => {
          Alert.alert('Sign up failed', error.message);
        });
    };
  return (
    <View style='bg-black h-full w-full'>

        <View style="h-full w-full flex justify-around pt-29px pb-30 ">

            <View style='flex items-center '>
        <Text style="text-white tracking-wider text-3xl pt-[90px] pb-[60px] font-bold gap-y-10">My App</Text>
        </View>

        <View style="flex items-center mx-3 space-y-4">
            <View style="bg-[#383834] p-5 rounded-xl w-full ">
            <TextInput style='text-white' placeholder='Name'
            onChangeText={setName}
            placeholderTextColor={'gray'}/>
            </View>
            

            <View style="bg-[#383834] p-5 rounded-xl w-full ">
            <TextInput style='text-white' placeholder='Email Address' 
            onChangeText={setEmail}
            placeholderTextColor={'gray'}/>
            </View>




            <View style="bg-[#383834] p-5 rounded-xl w-full flex-row  ">
            <TextInput style='text-white' placeholder='password'
            
            onChangeText={(text)=>{
              setPassword(text);
              validatePassword(text);


            }}
            placeholderTextColor={'gray'}


            secureTextEntry={!passwordVisible}
            
            />
 

            <TouchableOpacity style='left-[245px]' onPress={()=>setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
       
                </View>
                
                <View style="bg-[#383834] p-5 rounded-xl w-full   ">
            <TextInput style='text-white' placeholder='confirm password' 
            onChangeText={setConfirmPassword}
            placeholderTextColor={'gray'}
            secureTextEntry={!passwordVisible}
            />
 </View>

            <TouchableOpacity style='left-[150px] bottom-14 ' onPress={()=>setPasswordVisible(!passwordVisible)}>
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>

            <View style='space-y-[-16]'>

                <View style="text-white left-[110px] bottom-10 ">
                  <CheckBox
        
          title="One lowercase character"
           checked={checkboxes.lowercase}
           textStyle={{ color: 'white' }}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
           />
        </View>
        <View style="text-white left-[110px] bottom-10 ">
                  <CheckBox
        
          title="One lowercase character"
           checked={checkboxes.lowercase}
           textStyle={{ color: 'white' }}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
           />
        </View>
        </View>




        <View style='bottom-36 right-24 space-y-[-16]'>
        <View style="text-white  ">
                  <CheckBox
        
          title="One lowercase character"
           checked={checkboxes.lowercase}
           textStyle={{ color: 'white' }}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
           />
        </View>
        <View style="text-white  ">
                  <CheckBox
        
          title="One lowercase character"
           checked={checkboxes.lowercase}
           textStyle={{ color: 'white' }}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
           />
        </View>

        <View style="text-white  ">
                  <CheckBox
        
          title="One lowercase character"
           checked={checkboxes.lowercase}
           textStyle={{ color: 'white' }}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
           />
        </View>
</View>

            <View style="w-full flex items-center  bottom-40">
                <TouchableOpacity
                style="w-full bg-[#ECCC77] p-3 rounded-xl mb-3 'flex items-center"
                onPress={handleSignUp}
                >
                    <Text style="text-xl font-bold ">Sign Up</Text>
                </TouchableOpacity>
            </View>

             <View>
                <View style='flex-row justify-center bottom-28'>
        <Text style="text-white ">Don't have an account? 
            </Text>
            <TouchableOpacity onPress={()=> navigation.push('login')}>
                <Text style="text-[#ECCC77] underline">  Sign In</Text>
            </TouchableOpacity>
      
             </View>
             </View>

        </View>
        </View>
    </View>
  )
}