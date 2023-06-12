import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Name = () => <Text style={styles.profileName}>Felipe C. Araujo</Text>

const styles = StyleSheet.create({
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Name