import React, { useState } from "react";
import axios from "axios";
import moked_users from "../../services/mocked.users.json";
import { Input } from "../Input";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";

export function FilterInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pesquisa boaa</Text>
      <Input
        placeholder="digite algo para pesquisar"
        keyboardType="default"
        onChangeText={setInputValue}
      />

      <ScrollView>
        {moked_users
          .filter((value) => {
            if (inputValue === "") {
              return value;
            } else if (
              value.first_name.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return value;
            }
          })
          .map((user, index) => (
            <Text key={index}> {user.first_name} </Text>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentInput: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 16,
    marginLeft: 22,
    marginTop: 8,
  },
});
