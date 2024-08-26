import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Task } from './src/components/Task';
import { CardNumber } from "./src/components/CardNumber";

export default function App() {
    return (
      <View style={styles.container}>
        <view style={{ flexDirection: "row", gap: 16 }}>
          <CardNumber />
          <CardNumber />
          <CardNumber />
        </view>

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <StatusBar style="auto" />
      </View>
    );

  useEffect(() => {
    console.log("foi!");
  }, []);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385E",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
});
