import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import ProfileImage from './components/ProfileImage';
import Description from './components/Description';
import Name from './components/Name';

const Profile = () => {
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}>
            <View style={styles.profileContainer}>
                <ProfileImage />
                <Name />
                <Description />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.trakto]}
                        onPress={() => handleLink('https://www.trakto.io')}>
                        <Text style={styles.buttonText}>Trakto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.linkedin]}
                        onPress={() => handleLink('https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/')}>
                        <Text style={styles.buttonText}>LinkedIn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.github]}
                        onPress={() => handleLink('https://github.com/FelipeCostaAraujo')}>
                        <Text style={styles.buttonText}>GitHub</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    github: {
        backgroundColor: 'black',
    },
    trakto: {
        backgroundColor: '#4743FC',
    },
    linkedin: {
        backgroundColor: '#0e76a8'
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

function handleLink(url) {
    Linking.openURL(url);
}


export default Profile;
