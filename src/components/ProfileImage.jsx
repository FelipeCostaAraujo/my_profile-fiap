import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfileImage = () => {
    return (
        <Image
            source={require('../assets/me.png')}
            style={styles.profileImage}
        />
    );
};

const styles = StyleSheet.create({
    profileImage: {
        width: 200,
        height: 250,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default ProfileImage;
