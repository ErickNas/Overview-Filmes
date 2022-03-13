import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import FlatComponent from './components/FlatComponent';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Tela1 = () => {
  const data = [
    {key:'0',
     filme:'SCOOBY! O Filme',
     ano: 2020,
     estilo:'Comédia',
     direcao:'Tony Cervone',
     image:'https://br.web.img3.acsta.net/c_310_420/pictures/20/03/05/20/58/4942195.jpg',
     descricao:'O Filme é uma história de origem dos famosos personagens da série animada da Hanna Barbera. Salsicha e Scooby tem uma conexão instantânea envolvendo comida em seu primeiro encontro, e logo se unem aos jovens detetives Fred, Velma e Daphne para formar a Mistério S/A.',
    },
    {key:'1',
     filme:'Doce Entardecer na Toscana',
     ano: 2021,
     estilo:'Drama',
     direcao:'Jacek Borcuch',
     image:'https://br.web.img3.acsta.net/pictures/19/12/11/19/47/1467591.jpg',
     descricao:'Maria, uma mãe de família, começa a se envolver secretamente com um jovem imigrante egípcio. Conforme eles se aproximam, um atentado terrorista vira suas vidas do avesso, e Maria precisa resistir à histeria generalizada.',
    }
  ]


  return (
    <View style={styles.container}>
      <SwiperFlatList index={1} showPagination data={data} renderItem={({item}) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <FlatComponent data={item}/>
        </View>
      )}/>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#cacaca' },
  child: { width, justifyContent: 'center' },
});

export default Tela1;