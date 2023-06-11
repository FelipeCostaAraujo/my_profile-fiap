import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const Profile = () => {
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.profileContainer}>
                <Image
                    source={require('./assets/me.png')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Felipe C. Araujo</Text>
                <Text style={styles.profileDescription}>
                    Sou desenvolvedor mobile a 6 anos e comecei trabalhando com o Ionic na sua primeira versão com javascript em 2017 e fiquei 2 anos trabalhando com o Ionic em angular ate a versão 4 do Ionic.
                    Trabalho com Flutter atualmente na Trakto uma startup de design que esta a muitos anos no mercado, mas ja trabalhei com Swift, Java Android.
                    Já trabalhei em inumeros projetos de backend, front e mobile.
                    Tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs.
                    Sou apaixonado por eletronica e iots e tenho varios projetos usando arduino.
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        marginBottom: 100,
        borderRadius: 10,
        alignItems: 'center',
    },
    profileImage: {
        width: 200,
        height: 250,
        borderRadius: 5,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Profile;
