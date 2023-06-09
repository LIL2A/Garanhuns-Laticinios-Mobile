import { StyleSheet } from 'react-native';
import {View,Text} from 'react-native';



export const AddProd = () => {

  return (
    <View style={styles.container}>
      <Text>Cria aqui o que tu vai adicionar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71ADDC',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default AddProd;