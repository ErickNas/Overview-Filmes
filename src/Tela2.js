import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#cacaca',
    alignItems: 'center',
    flex: 1,
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 17,
  },
  images: {
    width: 150,
    height: 200,
  },
  general: {
    color: 'black',
    fontSize: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const Tela2 = () => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{uri: data.image}} style={styles.images}/>
      <Text style={styles.title}>FILME: {data.filme}</Text>
      <Text style={styles.general}>ANO: {data.ano}</Text>
      <Text style={styles.general}>ESTILO: {data.estilo}</Text>
      <Text style={styles.description}>DESCRIÇÃO: {data.descricao}</Text>
      <Text style={styles.general}>DIRIGIDO POR: {data.direcao}</Text>
    </View>
  );
};

export default Tela2;
