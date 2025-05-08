import { View, Text, StyleSheet } from "react-native";
import React from "react";

type BallProps = {
  number: number;
}

export default function Ball({ number }: BallProps) {
  return (
    <View style={styles.ball}>
      <Text style={styles.number}>
        {number}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
