import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;
  const content = props.content;

  const backgroundColor = type === "primary" ? "#4b4b4b" : "#e8e5e5";
  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("hey");
        }}
      >
        <Text style={(styles.text, { color: textColor })}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
