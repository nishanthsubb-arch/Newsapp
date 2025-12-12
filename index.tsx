import { Link } from "expo-router";
import { useEffect,useState } from "react";
import { ScrollView ,Text, View,Image, Pressable } from "react-native";

export default function Index() {
  type Article = {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  content?: string;
};

  const[news,setNews]=useState<Article[]>([]);
  useEffect(() => {
    fetchnews();
  }, [])

  async function fetchnews(){
    try{
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?language=en&from=2025-11-30&sortBy=publishedAt&apiKey=7db51c936788467c9129e84714f57ed7"
      );
      const data = await response.json();
      setNews(data.articles);
    } catch(e){
      console.log(e);
    }
  }


  return (
    <ScrollView style={{ backgroundColor: "#000000ff" }}>
      {news.map((news)=>(
        <Link key={news.title}
        href={{pathname:"/details",params:{url: news.url,title: news.title,description: news.description, urlToImage:news.urlToImage,content:news.content}}}>
        <View key={news.title} style={{borderWidth:5,borderColor:"#3fffbfff",padding:8, marginTop : 2,marginBottom:2 ,backgroundColor: "#000000ff", borderRadius: 20 }}>
          <Image
            source={{ uri: news.urlToImage }}
            style={{ borderWidth:5,borderColor:"#3fffbfff",marginTop : 10,width: "100%", height:300, borderRadius: 20}}
            resizeMode="cover"></Image>
          
          <Text style={{fontWeight: "bold" , fontSize: 20, marginTop: 2,color:"#3fffbfff"}}>{news.title}</Text>
          <Text style={{marginBottom: 1, fontSize:12, marginTop: 4, color: "#b5b3b3de" }}>{news.description}</Text>

        </View>
        </Link>
      ))}
    </ScrollView>
  );
}
