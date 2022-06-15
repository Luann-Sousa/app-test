import React, { useState } from "react";
import axios from "axios";
import { Input } from "../Input";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
} from "react-native";

export function AutoCompletViaCep() {
  const [cep, setCep] = useState("");
  const [values, setValues] = useState({
    bairro: "",
    complemento: "",
    localidade: "",
    logradouro: "",
    uf: "",
  });

  async function handleGetCep() {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => {
        setValues(response.data);
        console.log("ok", values);
        console.log("res", response.data);
      })
      .catch((error) => console.log("error na buscas de cep", error));
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem vindo ao busca cep</Text>

      <View style={styles.contentInput}>
        <Text style={styles.label}>CEP</Text>
        <Input
          placeholder="Digite o cep que deseja buscar"
          value={cep}
          onChangeText={setCep}
          onBlur={() => handleGetCep()}
        />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.label}>Logradouro</Text>
        <Input placeholder="Digite o logradouro" value={values.logradouro} />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.label}>Estado</Text>
        <Input placeholder="Digite o estado" value={values.uf} />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.label}>Bairro</Text>
        <Input placeholder="Digite o bairro" value={values.bairro} />
      </View>

      <View style={styles.contentInput}>
        <Text style={styles.label}>Cidade</Text>
        <Input placeholder="Digite a cidade" value={values.localidade} />
      </View>
      <View style={styles.contentInput}>
        <Text style={styles.label}>Complemento</Text>
        <Input placeholder="Digite o complemento" value={values.complemento} />
      </View>
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
