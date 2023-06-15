import {
    View,
    Text,
    Image,
    StyleSheet
  } from "react-native";
  
  export const Produtos = (props) => {
      return(
          <View style={styles.container}>
              <Text style={styles.title}>{props.nome}</Text>
              <Image style={styles.foto} source={{ uri: props.foto }}/>
              <Text style={styles.ncm}>{props.ncm}</Text>
              <Text style={styles.lote}>{props.lote}</Text>
              <Text style={styles.validade}>{props.validade}</Text>
              <Text style={styles.classificacao}>{props.classificacao}</Text>
          </View>
      )
  }
  
  export default Produtos;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#0892B1',
      margin: 30,
      padding: 20,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title:{
      color: "#0b1e2d",
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 2
    },
    ncm:{
      color: "#0b1e2d",
      fontWeight: "200",
      fontSize: 16,
      marginBottom: 2
    },
    lote:{
      color: "#0b1e2d",
      fontSize: 10,
      marginBottom: 5
    },
    foto:{
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 10
    },
    validade:{
      color: "#0b1e2d",
      fontSize: 10,
      marginBottom: 5
    },
    classificacao: {
      color: "#0b1e2d",
      fontSize: 15
    }
  })