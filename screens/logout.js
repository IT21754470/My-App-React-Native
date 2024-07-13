import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import React,{useContext} from 'react';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from './auth'

export default function LoginScreen(){
    const { user } = useContext(AuthContext);

    
    const navigation = useNavigation();
  return (
    <View className='bg-black h-full w-full'>

        <View classNme="h-full w-full flex justify-around pt-29px pb-30">

            <View className='flex items-center'>
        <Text className="text-white tracking-wider text-3xl pt-[120px] pb-[89px] font-bold gap-y-10">My App</Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
            <View className="bg-[#383834] p-5 rounded-xl w-full ">
            <TextInput className='text-white'
             placeholder='Name'
             value={user.displayName}
              placeholderTextColor={'gray'}/>
            </View>
            

            <View className="bg-[#383834] p-5 rounded-xl w-full ">
            <TextInput
                    className='text-white'
                    placeholder='Email'
                    placeholderTextColor='gray'
                    value={user.email} 
                    editable={false} 
                />
            </View>




           

            <View className="w-full flex items-center gap-10 top-64">
                <TouchableOpacity
                className="w-full bg-[#ECCC77] p-3 rounded-xl mb-3 'flex items-center">
                   
                    <TouchableOpacity onPress={()=> navigation.push('login')}>
                <Text className="text-[#ECCC77]  text-xl text-black font-bold"> Log Out</Text>
            </TouchableOpacity>
                </TouchableOpacity>
            </View>
            

        </View>
        </View>
    </View>
  )
}