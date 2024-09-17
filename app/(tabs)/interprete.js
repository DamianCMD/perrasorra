import React, { useRef, useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

const videos = [
  { id: '1', title: 'Acta', source: require('../../assets/videos/words/acta.mov') },
  { id: '2', title: 'Artículo', source: require('../../assets/videos/words/articulo.mov') },
  { id: '3', title: 'Castigo', source: require('../../assets/videos/words/castigo.mov') },
  { id: '4', title: 'Defender', source: require('../../assets/videos/words/defender.mov') },
  { id: '5', title: 'Firma', source: require('../../assets/videos/words/firma.mov') },
  { id: '6', title: 'Información', source: require('../../assets/videos/words/informacion.mov') },
  { id: '7', title: 'Jurídico', source: require('../../assets/videos/words/juridico.mov') },
  { id: '8', title: 'Reglas', source: require('../../assets/videos/words/reglas.mov') },
]

const Interprete = () => {

  const [selectedVideo, setSelectedVideo] = useState(require('../../assets/videos/words/reglas.mov'));

  const reiniciar = () => {
    setSelectedVideo(require('../../assets/videos/words/reglas.mov'));
  }

  useEffect(() => {
  }, [])
  return (

    <View style={styles.container}>
      {/* //Aqui va la imagen de CITEIM */}
      <View style={styles.containerImagen}>

      </View>
      {/* //Aqui van los Iconos de x y recargar */}
      <View style={styles.containerIconos}>
        
        <TouchableOpacity onPress={() => reiniciar()}
        >
          <Icon name="reload-outline" size={50} color="#fff" style={{ top: 10 }} />
        </TouchableOpacity>
      </View>

      {/* //Aqui va el cuadro para el monito 3D */}
      <View style={styles.containerMonito3D}>

        <View style={styles.styleMonito3D}>
          <Video style={styles.backgroundVideo}
            source={selectedVideo}
          />
          {/* <Text style={{color:'#fff', fontSize:200}}>{numeroVideo}</Text> */}
        </View>

      </View>

      {/* //Aqui va el cuadro que contiene el texto y los dos botones */}
      <View style={styles.containerTexto}>

        <View style={styles.styleCuadroBotones}>

          <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => setSelectedVideo(item.source)}>
                <Image source={selectedVideo} style={styles.thumbnail} />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.listContainer}
          />

        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8bb4d0",
    width: "100%",
    height: 1194,
    overflow: "hidden"
  },
  containerImagen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  styleImagen: {
    width: 200,
    height: 200,
    top: -50,
  },
  containerIconos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  containerMonito3D: {
    flex: 15,
    backgroundColor: '#8bb4d0',
    width: "80%",
    marginLeft: 75,
    borderRadius: 35
  },
  styleMonito3D: {
    backgroundColor: '#8bb4d0',
    width: '68%',
    height: '95%',
    left: 100,
    top: 38
  },
  containerTexto: {
    flex: 5,
    alignItems: 'center',
  },
  styleTextInput: {
    height: 130,
    borderRadius: 40,
    fontSize: 30,
    color: '#024acf',
  },
  styleCuadroTexo: {
    backgroundColor: '#fff',
    width: '85%',
    height: 130,
    borderRadius: 40,
    marginTop: 25,
    paddingHorizontal: 40,
    fontSize: 90
  },
  styleCuadroBotones: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 70
  },
  styleBotones: {
    backgroundColor: '#c4b6e4',
    width: 200,
    height: 60,
    marginTop: -10,
    marginHorizontal: 40,
    borderRadius: 20
  },
  styleText: {
    textAlign: 'center',
    fontSize: 30,
    top: 8,
    color: '#8724de'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: -380,
    bottom: 0,
    right: 0,
    width: '280%'
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333'
  },
  separator: {
    height: 10,
  },
})

export default Interprete;