import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack>
    <Stack.Screen
      name="index"
      options={{

        title: "Top Headlines",
        headerStyle: { backgroundColor: "#000000ff" },
        headerTitleStyle: { fontSize:40,color: "#3fffbfff" },
        headerTitleAlign: "center"
      }}/>
      <Stack.Screen
      name="details"
      options={{

        title:"News Details",
        headerBackButtonDisplayMode: "generic",
        headerStyle: { backgroundColor: "#000000ff" },
        headerTitleStyle: { fontSize:40,color: "#3fffbfff" },
        headerTitleAlign: "center"
      }}/>
  </Stack>);
}
