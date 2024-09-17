import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

// Obtén las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const Respuesta = () => {
  return (
    <ScrollView
      horizontal // Habilita el scroll horizontal
      pagingEnabled // Hace que las vistas se desplacen una por una
      showsHorizontalScrollIndicator={false} // Oculta el indicador de scroll horizontal
      style={styles.scrollView}
    >
      {/* Cada vista ocupa el ancho completo de la pantalla */}
      <View style={[styles.box]}>
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
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
        Puedes ir a la comisaría más cercana, hacer la denucia en línea en algunos casos, o llamar a una línea de atención para recibir orientación sobre que hacer.
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
        <Text style={styles.tittle}>Respuestas</Text>
        <Text style={styles.subt}>
        Si tus gastos son bajos o estás en una situación vulnerable, podrías calificar para un abogado gratuito o de bajo costo. Consulta en organizaciones locales o en el sitio web del gobierno.
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    flex:2,
    width: width, // Hace que cada vista tenga el ancho de la pantalla
    height: height, // Hace que cada vista tenga el alto de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1210AF'
  },
  tittle: {
    position: "absolute",
    top: 900,
    left:45,
    fontSize: 55,
    color: '#F5FFFA',
    fontFamily: "Titulo",
  },
  subt: {
    position: "absolute",
    top: 990,
    left:45,
    fontSize: 28,
    marginRight:80,
    color: '#F5FFFA',
    fontFamily: "Regular",
    textAlign: "justify"
  },
  juridico: {
    top: 320,
    left: 200,
    fontSize: 32,
    color: "#6F96D1",
    fontFamily: "Light",
    marginRight: 5,
  },
  justiciaIcon: {
    top: 270,
    left:165,
    width: 35,
    height: 35,
  },
  
});

export default Respuesta;
