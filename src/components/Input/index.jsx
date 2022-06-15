import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { styles } from "./styles";

export const Input = (props) => {
  const [securety, setSecurety] = useState(props.secureTextEntry);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#7B8974"}
        underlineColorAndroid="transparent"
        {...props}
        secureTextEntry={securety}
      />
      <Icon
        name={props.iconName}
        size={26}
        color={"#444"}
        style={styles.icon}
      />

      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => alert("i")}>
          <Icon
            name={securety ? "eye" : "eye-off"}
            size={26}
            color={"#444"}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
