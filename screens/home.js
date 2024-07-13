import react from 'react';
import {useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';

const HomeScreen=({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('login')
        },3000)
    },[navigation]);
    return (
      <View style={styles.container}>
        
            <Text style={styles.text}>My App</Text>
        </View>

    )


}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",    
        backgroundColor:"black",
    },

    text:{
        color:"white",
        fontSize:30,
        fontFamily:'Inter',
        pt:20,
    }
})
export default HomeScreen;