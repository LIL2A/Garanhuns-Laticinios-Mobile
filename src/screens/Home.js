import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
  } from "react-native";
  import { useEffect, useState } from "react";
  import axios from "axios";    
  import Produtos from "../components/Produtos";
  import Logo from '../img/logo512.png'
  
  export const Home = () => {
    const [dados, setDados] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await axios.get(
          "http://192.168.1.4:3000/produto/"
        );
        setDados(Object.values(res.data));
      }
      fetchData();
      
    }, []);

  console.log(dados);

    return (
      <ScrollView style={styles.container}>
          
        <View style={{display: "flex", width: "100%", alignItems: "center"}}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.titulo}>Garanhuns Laticínios</Text>
        </View>
        {dados.map((dado, index) => (
          <Produtos
            key={index}
            title={dado.nome}
            poster={dado.foto}
            genre={dado.ncm}
            director={dado.lote}
            release={dado.validade}
            synopsis={dado.foto}
          />
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#C8F7FE",
      paddingTop: 50,
    },
    logo: {
      height: 140,
      width: 160,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.30,
      shadowRadius: 4,
    },
    titulo: {
      color: "#0b1e2d",
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 2
    }
  });
  
  export default Home;
  