import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    height: 50,
    flex: 1,

    backgroundColor: "#F9f9fa",
    paddingLeft: 40,
    marginHorizontal: 20,

    borderRadius: 8,
    fontSize: 18,
    borderColor: "#E4E7EB",
    borderWidth: 1,
  },

  icon: {
    position: "absolute",
    left: 30,
    top: 10,
  },

  iconSecret: {
    position: "absolute",
    right: 30,
    top: 10,
  },
});
