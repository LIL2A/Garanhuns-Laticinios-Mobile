import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Button,
    TouchableOpacity
  } from "react-native";
  import { useNavigation } from '@react-navigation/native';
  import { useEffect, useState } from "react";
  import axios from "axios";    
  import Produtos from "../components/Produtos";
  import Logo from '../img/logo512.png'
  
  export const Home = () => {
    const [dados, setDados] = useState([]);
    const [fix, setFix] = useState([]);

    const navigation = useNavigation();


    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get("http://192.168.1.8:3000/produto/", { timeout: 50000 });
          setDados(response.data.produto);
          } catch (error) {
          console.error(error);
        }
      }
    
      fetchData();
    }, []);

    console.log(dados[1])

    return (
      <ScrollView style={styles.container}>
          
        <View style={{display: "flex", width: "100%", alignItems: "center"}}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.titulo}>Garanhuns Laticínios</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Actions')}>
        {Object.values(dados).map((dado, index) => (
          <Produtos
          key={index}
          nome={dado.nome}
          foto={dado.foto}
          ncm={dado.ncm}
          lote={dado.lote}
          validade={dado.validade}
          classificacao={dado.classificacao}
          descricao={dado.descricao}
          />
        ))}
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('AddProd')}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        
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
    },
    button: {
      backgroundColor: '#0892B1',
      borderRadius: 50,
      padding: 10,
      marginTop: 20,
      marginBottom: 60,
      marginLeft: 270,
      width: 72,
      display: 'flex',
      flexDirection: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      color: "#fff"
    },
    button2: {
      backgroundColor: '#0892B1',
      borderRadius: 10,
      marginBottom: 60,
      marginLeft: 240,
      marginRight: 30,
      display: 'flex',
      alignItems: 'center',
    },
    text2: {
      fontSize: 40,
      padding: 8,
      color: "#fff",
    }
  });
  
  export default Home;