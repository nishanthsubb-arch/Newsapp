import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView ,Text, View,Image, Pressable, Linking } from "react-native";
export default function Details() {
    const params = useLocalSearchParams();
    function openLink() {
        Linking.openURL(params.url as string);
    }
    console.log("DETAILS PAGE URL = ", params.url);


    return (
    <ScrollView style={{ gap:1, backgroundColor: "#000000ff" }}>
        <Image
        source={{ uri: params.urlToImage }}
        style={{ borderWidth:5,borderColor:"#3fffbfff",marginTop : 10,width: "100%", height:300, borderRadius: 20}}
        resizeMode="cover"></Image>
        <View style={{padding:8, marginTop : 2,marginBottom:2 ,backgroundColor: "#000000ff" }}>
          <Text style={{fontWeight: "bold" , fontSize: 20, marginTop: 2,color:"#3fffbfff"}}>{params.title}</Text>
          <Text style={{marginBottom: 1, fontSize:12, marginTop: 4, color: "#b5b3b3de" }}>{params.content}</Text>
          <Pressable onPress={openLink}><Text style={{borderRadius:20,padding:20,marginLeft:20,marginRight:20,backgroundColor:"#2e2e2eff",marginTop:50,textAlign:"center", fontSize:20 ,color:"#3fffbfff", textDecorationLine: "underline" }}>CLICK TO READ MORE</Text></Pressable>
        </View>
    </ScrollView>
  );
}