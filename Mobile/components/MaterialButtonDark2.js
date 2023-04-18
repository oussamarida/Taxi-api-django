import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonDark2(props) {
  const { onPress, caption, style } = props;

    return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name="calendar" style={styles.iconStyle}></Icon>
      <Text style={styles.caption}>{caption || "BUTTON"}</Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#fff",
    fontSize: 20
  },
  iconStyle: {
    color: "rgba(255,246,246,1)",
    fontSize: 34,
    left: 0,
    width: 50,
    top: 9,
    height: 50,
    margin: 11,
    marginRight:0,
  },
});

export default MaterialButtonDark2;
