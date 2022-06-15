import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar, CalendarProps, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localConfig";
import testIDs from "../../utils/testeIDs";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

const INITIAL_DATE = "2020-02-03";

const FINALY_DATE = "2020-02-05";

const periods = [];

export function Calendars() {
  const [initialDay, setInitialDay] = useState(INITIAL_DATE);
  const [finalyDay, setFinalyDay] = useState(FINALY_DATE);
  const [selectedValue, setSelectedValue] = useState(new Date());

  const getNewSelectedDate = useCallback(
    (date, shouldAdd) => {
      const newMonth = new Date(date).getMonth();
      const month = shouldAdd ? newMonth + 1 : newMonth - 1;
      const newDate = new Date(selectedValue.setMonth(month));
      const newSelected = new Date(newDate.setDate(1));

      return newSelected;
    },
    [selectedValue]
  );
  const onPressArrowLeft = useCallback(
    (subtract, month) => {
      const newDate = getNewSelectedDate(month, false);
      setSelectedValue(newDate);
      subtract();
    },
    [getNewSelectedDate]
  );

  const onPressArrowRight = useCallback(
    (add, month) => {
      const newDate = getNewSelectedDate(month, true);
      setSelectedValue(newDate);
      add();
    },
    [getNewSelectedDate]
  );

  const CustomHeaderTitle = (
    <TouchableOpacity
      style={styles.customTitleContainer}
      onPress={() => console.log("Tapped!")}
    >
      <Text style={styles.customTitle}>
        0{selectedValue.getMonth() + 1}-{selectedValue.getFullYear()}
      </Text>
    </TouchableOpacity>
  );
  const onDayPress: CalendarProps["onDayPress"] = (day) => {
    setInitialDay(day.dateString);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendário 2022</Text>
      <Calendar
        style={styles.calendar}
        customHeaderTitle={CustomHeaderTitle}
        onPressArrowLeft={onPressArrowLeft}
        onPressArrowRight={onPressArrowRight}
        onDayPress={onDayPress}
        markedDates={{
          [initialDay]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "orange",
            selectedTextColor: "red",
          },
        }}
        headerStyle={{
          backgroundColor: "#707070",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  calendar: {
    marginBottom: 20,
    marginTop: 60,
    backgroundColor: "#707070",
    width: 370,
    height: 370,
    borderRadius: 8,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
    width: 390,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
