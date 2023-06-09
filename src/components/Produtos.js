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
              <Image style={styles.poster} source={{ uri: props.foto }}/>
              <Text style={styles.director}>{props.ncm}</Text>
              <Text style={styles.release}>{props.lote}</Text>
              <Text style={styles.genre}>{props.validade}</Text>
              <Text style={styles.synopsis}>{props.classificacao}</Text>
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
      margin: 10,
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
    director:{
      color: "#0b1e2d",
      fontWeight: "200",
      fontSize: 15,
      marginBottom: 2
    },
    release:{
      color: "#0b1e2d",
      fontSize: 10,
      marginBottom: 5
    },
    poster:{
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 10
    },
    genre:{
      color: "#0b1e2d",
      fontSize: 10,
      marginBottom: 5
    },
    synopsis: {
      color: "#0b1e2d",
      fontSize: 15
    }
  })