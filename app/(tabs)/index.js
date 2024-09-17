import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';


const Home = () => {


    return (
        <SafeAreaView style={styles.app}>
            <Link href="/traductor" asChild>
                <Pressable style={styles.appInner} onPress={() => { }}>
                    <Image style={[styles.frameChild, styles.iconLayout]} resizeMode="cover" source={require('../../assets/images/tradbanner.png')} />
                </Pressable>
            </Link>
            <Text style={[styles.traduceSeasA, styles.traduceSeasATypo]}>Traduce señas a texto en tiempo real usando la cámara.</Text>
            <Link href="/respuestas" asChild>
                <Pressable style={styles.wrapper} onPress={() => { }}>
                    <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../../assets/images/catbanner.png')} />
                </Pressable>
            </Link>
            <Text style={[styles.exploraNuestrasFunciones, styles.traduceSeasATypo]}>Explora nuestras funciones  para mejorar la comunicación en lenguaje de señas.</Text>
            <Text style={[styles.heyBienvenidoUsuario, styles.Tittle]}>Hey!, Bienvenido usuario</Text>
            <Text style={[styles.traductorDeLsm, styles.Tittle]}>Traductor de LSM</Text>
            <Text style={[styles.catlogoRespuestas, styles.intrpreteVirtualTypo]}>{`Catálogo Respuestas  `}</Text>
            <Text style={[styles.accedeAUna, styles.accedeAUnaTypo]}>Accede a una base de datos inteligente con respuestas rápidas.</Text>
            <Link href="/interprete" asChild>
                <Pressable style={styles.container} onPress={() => { }}>
                    <Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source={require('../../assets/images/interbanner.png')} />
                </Pressable>
            </Link>
            <Text style={[styles.intrpreteVirtual, styles.intrpreteVirtualTypo]}>Intérprete virtual</Text>
            <Text style={[styles.convierteTextoO, styles.accedeAUnaTypo]}>{`Convierte texto en señas con un intérprete virtual.`}</Text>
            <Image style={styles.messageIcon} resizeMode="cover" source={require('../../assets/images/message.png')} />
            <Image style={styles.undrawDrinkCoffeeV3au1Icon} resizeMode="cover" source={require('../../assets/images/boy.png')} />
            <Image style={styles.undrawSharingKnowledge03vpIcon} resizeMode="cover" source={require('../../assets/images/woman.png')} />
            <Image style={[styles.appChild, styles.appChildLayout]} resizeMode="cover" source={require('../../assets/images/guy.png')} />
            <Image style={[styles.interpreteIcon, styles.appChildLayout]} resizeMode="cover" source={require('../../assets/images/interprete.png')} />
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    iconLayout: {
        opacity: 0.85,
        borderRadius: 25
    },
    traduceSeasATypo: {
        color: "#344ead",
        fontSize: 24,
        left: "50%",
        textAlign: "center",
        position: "absolute"
    },
    Tittle: {
        color: "#1210af",
        fontWeight: "700",
        textAlign: "left",
        left: "50%",
        position: "absolute",
        fontFamily: "Titulo",
    },
    intrpreteVirtualTypo: {
        lineHeight: 50,
        fontSize: 48,
        textAlign: "left",
        color: "#1210af",
        fontFamily: "Regular",
        fontWeight: "800",
        position: "absolute"
    },
    accedeAUnaTypo: {
        fontSize: 20,
        color: "#344ead",
        fontFamily: "Regular",
        position: "absolute"
    },
    appChildLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    frameChild: {
        width: 800,
        height: 350
    },
    appInner: {
        top: 250,
        left: 30,
        width: 727,
        padding: 10,
        position: "absolute"
    },
    traduceSeasA: {
        marginLeft: -244,
        top: 420,
        width: 261,
        height: 108,
        textAlign: "center",
        fontFamily: "Regular",
        color: "#344ead",
        fontSize: 24,
        left: "50%"
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    wrapper: {
        left: 450,
        top: 720,
        width: 330,
        height: 400,
        position: "absolute"
    },
    exploraNuestrasFunciones: {
        marginLeft: -325,
        top: 160,
        lineHeight: 30,
        fontWeight: "300",
        fontFamily: "Regular",
        width: 566,
        textAlign: "center",
        color: "#344ead",
        fontSize: 24,
        left: "50%"
    },
    heyBienvenidoUsuario: {
        marginLeft: -352,
        top: 90,
        fontSize: 55,
        width: 620,
        textAlign: "left"
    },
    traductorDeLsm: {
        marginLeft: -248,
        top: 280,
        fontSize: 70,
        lineHeight: 65,
        width: 378,
        height: 125,
        textAlign: "left"
    },
    catlogoRespuestas: {
        top: 710,
        left: 446,
        width: 260,
        height: 300,
    },
    accedeAUna: {
        top: 800,
        left: 477,
        width: 161,
        height: 110,
        textAlign: "center"
    },
    container: {
        left: 40,
        top: 690,
        width: 370,
        height: 440,
        position: "absolute"
    },
    intrpreteVirtual: {
        top: 700,
        left: 96,
        width: 289,
        height: 100
    },
    convierteTextoO: {
        top: 800,
        left: 100,
        width: 144,
        height: 150,
        textAlign: "left"
    },
    messageIcon: {
        top: 330,
        left: 420,
        width: 375,
        height: 340,
        position: "absolute",
        overflow: "hidden"
    },
    undrawDrinkCoffeeV3au1Icon: {
        top: 120,
        left: 668,
        width: 100,
        height: 100,
        position: "absolute",
        overflow: "hidden",
        borderWidth: 1.5,           // Ancho del borde
        borderColor: '#BAD6EB',
        borderRadius: 50,
    },
    undrawSharingKnowledge03vpIcon: {
        top: 850,
        left: 500,
        width: 276,
        height: 290,
        position: "absolute",
        overflow: "hidden"
    },
    appChild: {
        height: "17%",
        width: "15%",
        top: "72%",
        right: "41.01%",
        bottom: "16.92%",
        left: "50%"
    },
    interpreteIcon: {
        height: "25%",
        width: "33%",
        top: "65%",
        right: "52.67%",
        bottom: "18.64%",
        left: "20%"
    },
    app: {
        backgroundColor: "rgba(245, 255, 250, 0.98)",
        flex: 1,
        height: 1194,
        overflow: "hidden",
        width: "100%"
    }
});

export default Home;
