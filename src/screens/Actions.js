import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Button,
    TouchableOpacity
  } from "react-native";


export const Actions = () =>{
    return(
        <Text style={styles.container}>UPDATE e DELETE</Text>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#C8F7FE",
      paddingTop: 50,
      fontSize: 26,
    }
  });

export default Actions;