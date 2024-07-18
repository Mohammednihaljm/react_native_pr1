import { View,Text, StyleSheet } from "react-native";

const Home=()=>{
    return(
        <View style={styles.container}>
            <Text>HOME PAGE</Text>
        </View>
    )
}

export default Home;

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})