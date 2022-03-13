import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    // flexDirection: 'row',
    marginBottom: 5,
    marginTop: 0,
    alignItems: 'center',
  },
  subcontainer: {
    marginLeft: 10,
    alignItems: 'center',
  },
  images: {
    width: 200,
    height: 300,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const FlatComponent = ({data}) => {
  const navigation = useNavigation();
  const navegar = () => {
      navigation.navigate('Tela2', {data:data});
  };
  
  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>

      <Image resizeMode="contain" source={{uri: data.image}} style={styles.images}/>

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.estilo}</Text>
        <Text>{data.ano}</Text>
      </View>

    </TouchableOpacity>
  );
};

export default FlatComponent;
