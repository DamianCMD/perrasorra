import React, { useRef, useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { MaterialIcons } from "@expo/vector-icons";

// Obtén las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const Respuesta = () => {
  const videoRefs = useRef([]); // Array para mantener las referencias de los videos
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para mantener la vista actual

  // Función que se llama cuando se cambia de vista
  const handleScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex); // Actualiza el índice actual
  };

  useEffect(() => {
    const currentVideoRef = videoRefs.current[currentIndex];
    if (currentVideoRef) {
      currentVideoRef.seek(0);
    }
  }, [currentIndex]);
  

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      onMomentumScrollEnd={handleScrollEnd}
    >
      <View style={[styles.box]}>
        <Video
          ref={(ref) => { videoRefs.current[0] = ref; }}
          style={styles.backgroundVideo}
          source={require('../../assets/videos/long/R1.mov')}
          repeat={true}
          paused={currentIndex !== 0}
        />
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
          Puedes buscar abogados en línea, preguntar a amigos o familiares, o acudir a clínicas legales gratuitas que ofrecen asesoría para jóvenes.
        </Text>
        <View style={styles.section}>
          <Text style={styles.juridico}>Jurídico</Text>
          <MaterialIcons
            name="gavel"
            size={35}
            color="#6F96D1"
            style={styles.justiciaIcon}
          />
        </View>
      </View>

      <View style={[styles.box]}>
        <Video
          ref={(ref) => { videoRefs.current[1] = ref; }}
          style={styles.backgroundVideo}
          source={require('../../assets/videos/long/R2.mov')}
          repeat={true}
          paused={currentIndex !== 1}
        />
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
          Puedes ir a la comisaría más cercana, hacer la denuncia en línea en algunos casos, o llamar a una línea de atención para recibir orientación sobre qué hacer.
        </Text>
        <View style={styles.section}>
          <Text style={styles.juridico}>Jurídico</Text>
          <MaterialIcons
            name="gavel"
            size={35}
            color="#6F96D1"
            style={styles.justiciaIcon}
          />
        </View>
      </View>

      <View style={[styles.box]}>
        <Video
          ref={(ref) => { videoRefs.current[2] = ref; }}
          style={styles.backgroundVideo}
          source={require('../../assets/videos/long/R3.mov')}
          repeat={true}
          paused={currentIndex !== 2}
        />
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
          Primero, regístrate en el sistema de impuestos de tu país. Luego, llena la declaración con tus ingresos y gastos, y paga en línea o en un banco antes de la fecha límite.
        </Text>
        <View style={styles.section}>
          <Text style={styles.juridico}>Jurídico</Text>
          <MaterialIcons
            name="gavel"
            size={35}
            color="#6F96D1"
            style={styles.justiciaIcon}
          />
        </View>
      </View>


      <View style={[styles.box]}>
        <Video
          ref={(ref) => { videoRefs.current[3] = ref; }}
          style={styles.backgroundVideo}
          source={require('../../assets/videos/long/R4.mov')}
          repeat={true}
          paused={currentIndex !== 2}
        />
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
          Primero, regístrate en el sistema de impuestos de tu país. Luego, llena la declaración con tus ingresos y gastos, y paga en línea o en un banco antes de la fecha límite.
        </Text>
        <View style={styles.section}>
          <Text style={styles.juridico}>Jurídico</Text>
          <MaterialIcons
            name="gavel"
            size={35}
            color="#6F96D1"
            style={styles.justiciaIcon}
          />
        </View>
      </View>


      <View style={[styles.box]}>
        <Video
          ref={(ref) => { videoRefs.current[4] = ref; }}
          style={styles.backgroundVideo}
          source={require('../../assets/videos/long/R5.mov')}
          repeat={true}
          paused={currentIndex !== 2}
        />
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
        Reúne todos los documentos relacionados y consulta a un abogado especializado en herencias para que te guíe en el proceso.
        </Text>
        <View style={styles.section}>
          <Text style={styles.juridico}>Jurídico</Text>
          <MaterialIcons
            name="gavel"
            size={35}
            color="#6F96D1"
            style={styles.justiciaIcon}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// Ejemplo de respuestas con videos diferentes
const responses = [
  {
    text: "Puedes buscar abogados en línea, preguntar a amigos o familiares, o acudir a clínicas legales gratuitas que ofrecen asesoría para jóvenes.",
    video: require('../../assets/videos/long/R1.mov'), // Reemplaza con el video correcto
  },
  {
    text: "Puedes ir a la comisaría más cercana, hacer la denuncia en línea en algunos casos, o llamar a una línea de atención para recibir orientación sobre qué hacer.",
    video: require('../../assets/videos/long/R2.mov'), // Otro video
  },
  {
    text: "Primero, regístrate en el sistema de impuestos de tu país. Luego, llena la declaración con tus ingresos y gastos, y paga en línea o en un banco antes de la fecha límite.",
    video: require('../../assets/videos/long/R3.mov'),
  },
  {
    text: "Si tus gastos son bajos o estás en una situación vulnerable, podrías calificar para un abogado gratuito o de bajo costo. Consulta en organizaciones locales o en el sitio web del gobierno.",
    video: require('../../assets/videos/long/R4.mov'),
  },
  {
    text: "Reúne todos los documentos relacionados y consulta a un abogado especializado en herencias para que te guíe en el proceso.",
    video: require('../../assets/videos/long/R5.mov'),
  }
];

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    flex: 2,
    flexDirection: 'column',
    width: width, // Hace que cada vista tenga el ancho de la pantalla
    height: height, // Hace que cada vista tenga el alto de la pantalla
    padding: 20,
    backgroundColor: '#fff',
  },
  video: {
    width: width * 0.9,
    height: height * 0.65,
    marginVertical: 40,
    marginHorizontal: 20
  },
  tittle: {
    flex: 1,
    fontSize: 60,
    position: "absolute",
    marginTop: 0,
    top: 70,
    left: 50,
    color: '#1210AF',
    fontFamily: "Titulo",
    marginBottom: 20,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  },
  subt: {
    flex: 1,
    fontSize: 27,
    position: "absolute",
    bottom: 190,
    left: 45,
    color: '#FFF',
    fontFamily: "Regular",
    textAlign: "justify",
    marginHorizontal: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  },
  section: {
    position: 'absolute',
    top: 70,
    right: 200,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 5,
  },
  juridico: {
    fontSize: 32,
    position: "absolute",
    color: "#1210AF",
    fontFamily: "bold",
    marginRight: 5,
    marginLeft: 40,
  },
  justiciaIcon: {
    width: 35,
    height: 35,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: -380,
    bottom: 0,
    right: 0,
    width: '205%'
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
  }
});

export default Respuesta;
